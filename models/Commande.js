const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Produit = require("./Produit");


const Commande = sequelize.define("Commande", {
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    produitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produit,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL, // Le type DECIMAL permet de stocker des montants financiers
        allowNull: false
    },
    dateCommande: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW // Cela attribue la date et l'heure actuelles
    },

});

// Définir les relations
Commande.belongsTo(Produit, { foreignKey: 'produitId' });
Produit.hasMany(Commande, { foreignKey: 'produitId' });


module.exports = Commande;