const Commande = require("../models/Commande");
const Produit = require("../models/Produit");


// Créer une commande
exports.createCommande = async (req, res) => {
    try {
        const { clientId, produitId, quantity } = req.body;

        // Vérifier si le produit existe
        const produit = await Produit.findByPk(produitId);
        if (!produit) {
            return res.status(404).json({ success: false, message: "Produit non trouvé" });
        }

        // Vérifier si le stock est suffisant
        if (produit.stock < quantity) {
            return res.status(400).json({ success: false, message: "Stock insuffisant" });
        }
       // Calculer le total de la commande
        const total = produit.price * quantity;

        // Créer la commande
        const commande = await Commande.create({ clientId, produitId, quantity,total });

        // Mettre à jour le stock
        produit.stock -= quantity;
        await produit.save();

        // Retourner les données complètes
        const commandeDetail = await Commande.findByPk(commande.id, {
            include: [Produit]
        });

        return res.status(201).json({ success: true, message: "Commande créée avec succès", commande: commandeDetail });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
};

// Récupérer toutes les commandes
exports.getCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll({ include: Produit });
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
};
