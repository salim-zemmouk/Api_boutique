const Vendeur = require("../models/Vendeur");

exports.getVendeurs = async (req, res) => {
    try {
        const vendeurs = await Vendeur.findAll();
        res.json(vendeurs);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.createVendeur = async (req, res) => {
    const { name, email } = req.body;
    try {
        const vendeur = await Vendeur.create({ name, email });
        res.status(201).json(vendeur);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};