const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Vendeur = sequelize.define("Vendeur", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Vendeur;