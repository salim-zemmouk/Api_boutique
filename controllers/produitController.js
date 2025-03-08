const Produit = require("../models/Produit");

exports.getProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.json(produits);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.createProduit = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const produit = await Produit.create({ name, price, stock });
        res.status(201).json(produit);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};