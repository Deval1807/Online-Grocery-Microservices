# Backend for Online Grocery Applicaion (Microservice Architecture)

This is a backend project for an online grocery shopping application designed using microservice architecture. The application consists of three main microservices: Customer, Products, and Shopping, with secure authentication, and seamless inter-service communication through RabbitMQ as a message broker for better consistancy in Data. The Project also uses Nginx for efficient Reverse Proxy.

The Entire Application is containerized by levaraging Docker and Deployed on AWS.

---

Also checkout the Simpler Monolithic Version of the same Project

[Monolithic Architecture](https://github.com/Deval1807/Online-Grocery-Monolithic)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Architecture Diagram](#architecture-diagram)
4. [Getiing Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Cloning](#cloning)
    - [Configuration](#configuration)
    - [Starting the Project](#starting-the-project)
    - [Usage](#usage)
5. [API Documentation](#api-documentation)
6. [Deployment](#deployment)
7. [Contribution](#contribution)
8. [Contact](#contact)


## Features

### Key Features:

- Microservices for Customer, Products, and Shopping
- Secure Authentication: Ensures safe and secure access for users with JWT-based authentication.
- Seamless Inter-Service Communication: Utilizes RabbitMQ as a message broker, ensuring reliable and consistent data flow across microservices.
- Efficient Reverse Proxy: Nginx is implemented for load balancing and efficient reverse proxy management, enhancing the application's performance and reliability.


###  Containerization and Deployment:
- Dockerized Microservices: Each microservice is containerized using Docker, ensuring consistent and isolated environments for development, testing, and production.
- AWS Deployment: The entire application is deployed on AWS, leveraging its scalability and reliability to handle varying loads and ensure high availability.


### Features of Individual services:

- Customer
    - Signup/Login
    - Add Address
    - View Profile, Orders and Wishlist

- Products
    - Add/View Products
    - View Products by Id/Category
    - Add to Cart/Wishlist
    - Delete form Cart/Wishlist

- Shopping
    - View Cart
    - Place/View Order


## Techonologies Useds

- **Backend Environment and Framework:** Node-Express
- **Message Broker:** RabbitMQ
- **Reverse Proxy:** Nginx
- **Containerization:** Docker
- **Cloud Deployment:** AWS (Beanstalk)
- **Database:** MongoDB


## Architecture Diagram

![Architecture](https://raw.githubusercontent.com/Deval1807/Online-Grocery-Microservices/main/images/Microservice%20Architecture.jpg)



## Getting Started

### Prerequisites

- Node.js installed
- Docker installed (if want to start through docker image)
- MongoDB database
- RabbitMQ 
    - [Either download locally](https://www.rabbitmq.com/docs/download) 
    - [Or use cloud provider](https://www.cloudamqp.com/)


### Cloning

Clone the Repository

```bash
git clone https://github.com/Deval1807/Online-Grocery-Microservices
cd Online-Grocery-Microservices
```


### Configuration

1. .env configuration

    - Create a new file `.env` in all the 3 services' folders, i.e. customer, products and shopping
    - Make sure to have the following configuration in them

        ```env
        APP_SECRET=<your_secret_key>
        MONGODB_URI=<your_mongodb_url>
        MESSAGE_BROKER_URL=<your_rabbitmq_url>
        EXCHANGE_NAME=<your_exchange_name>
        SHOPPING_BINDING_KEY=<binding_key_for_shopping_service>
        CUSTOMER_BINDING_KEY=<binding_key_for_customer_service>
        QUEUE_NAME=<queue_name_for_that_Service>
        PORT=<prot_no_according_to_the_service>
        ```

    - please note that if you are using RabbitMQ locally, the configuration will be:
        ```env
        MESSAGE_BROKER_URL = 'amqp://localhost'
        ```

2. RabbitMQ configuration (If you are using it locally)
    - Make sure to start your RabbitMQ service before starting the server, if you are using RabbitMQ locally.
        - If you have already installed RabbitMQ, directly search for `RabbitMQ Service - Start` and you will be able to start it.
    - RabbitMQ Management Console
        - Once the service is start, go to `http://localhost:15672` for the accessing the management console
        - If you are unable to access it, you will need to add a plugin for it
        - Open RabbitMQ command prompt and run the following command
            ```bash
            rabbitmq-plugins enable rabbitmq_management
            ```
        - Restart your service and it should be working 😄

### Starting the Project

- You can start the project in 2 ways, using Docker Image and by simply installing dependency and starting individual services.

1. Using Docker

    - Make sure you have your Docker service running
    - Make sure you have set up the `.env` files (see [Configuration](#configuration))
    - It is Advisable to use a Cloud Provider for RabbitMQ, while using it through Docker Image.
        - Check the [cloud provider](https://www.cloudamqp.com/)
    - Build the image
        ```
        docker-compose build
        ```
    - Run the image
        ```
        docker-compose up
        ```


2. Simple Installation

    - Install the dependencies:
        ```bash
        npm install
        ```
    - Make sure you have set up the `.env` files (see [Configuration](#configuration))
    - Make sure to start your RabbitMQ service before starting the server, if you are using RabbitMQ locally.
        - Check RabbitMQ configuration inside [Configuration](#configuration)
    - Starting the Services
        - Customer
            ```bash
            cd customer
            npm start
            ```
        - Products
            ```bash
            cd products
            npm start
            ```
        - Shopping
            ```bash
            cd shopping
            npm start
            ```


### Usage

- Once the services are up and running, check the [API Documentation](#api-documentation) for more detailed usage.


## Api Documentation

For Detailed API Documentation, visit:

- [API Documentation](https://documenter.getpostman.com/view/33324941/2sA3XWdJot)


## Deployment

- The [Deployed URL](http://online-gocery.ap-south-1.elasticbeanstalk.com)


## Contribution

We welcome contributions from the community. To contribute, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the coding standards and ethical practices. 


## Contact

For questions or support, please contact Deval Darji by following ways:

1. LinkedIn: [Deval Darji](https://www.linkedin.com/in/deval-darji-a15002226/)

2. Email: [deval135darji@gmail.com](mailto:deval135darji@gmail.com)
