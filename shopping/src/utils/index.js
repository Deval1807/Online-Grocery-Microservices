const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const amqplib = require("amqplib");

const { APP_SECRET,
  MESSAGE_BROKER_URL,
  EXCHANGE_NAME,
  QUEUE_NAME,
  SHOPPING_BINDING_KEY
} = require("../config");

//Utility functions
module.exports.GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

module.exports.GeneratePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports.ValidatePassword = async (
  enteredPassword,
  savedPassword,
  salt
) => {
  return (await this.GeneratePassword(enteredPassword, salt)) === savedPassword;
};

module.exports.GenerateSignature = async (payload) => {
  try {
    return await jwt.sign(payload, APP_SECRET, { expiresIn: "30d" });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.ValidateSignature = async (req) => {
  try {
    const signature = req.get("Authorization");
    console.log(signature);
    const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
    req.user = payload;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.FormateData = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};

/*************** Message Broker ***************/

// Crate a channel
module.exports.CreateChannel = async() => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);

    // create a channel once the connection is establised
    const channel = await connection.createChannel();

    // assertExchange will distribute our messages in queues dependig on the certain configurations
    await channel.assertExchange(EXCHANGE_NAME, 'direct', false);

    return channel;

  } catch (error) {
    throw error
  }
}

// Publish Messages
module.exports.PublishMessage = async(channel, binding_key, message) => {
  try {
    // publish the specific message to the channel
    // with the help of EXCHANGE_NAME and the binding key
    // only the consumer with that specific binding key can consume the message
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
    console.log("Message has been published: ", message)
  } catch (error) {
    throw error
  }
}

// Subscribe Messages
module.exports.SubscribeMessage = async(channel, service) => {
  try {
    const appQueue = await channel.assertQueue(QUEUE_NAME);

    // bind the queue name with the exchange name along with the binding key
    channel.bindQueue(appQueue.queue, EXCHANGE_NAME, SHOPPING_BINDING_KEY);

    channel.consume(appQueue.queue, data => {
      console.log("recieved data in shopping service: ");
      console.log(data.content.toString());
      service.SubscribeEvents(data.content.toString());
      channel.ack(data);
    })

  } catch (error) {
    throw error
  }
}