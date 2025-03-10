const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Produit = sequelize.define("Produit", {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
});

module.exports = Produit;