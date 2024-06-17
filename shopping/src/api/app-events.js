const ShoppingService = require('../services/shopping-service')

module.exports = (app) => {

    const service = new ShoppingService();

    /**
     * Route for other micro services to contact with customer services
     */
    app.use('/app-events', async(req, res, next) => {

        const { payload } = req.body;

        service.SubscribeEvents(payload);

        console.log("Shopping Service recovered Event!!");
        return res.status(200).json(payload);

    })

}