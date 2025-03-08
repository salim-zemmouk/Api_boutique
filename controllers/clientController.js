const Client = require("../models/Client");

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.createClient = async (req, res) => {
    const { name, email } = req.body;
    try {
        const client = await Client.create({ name, email });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};