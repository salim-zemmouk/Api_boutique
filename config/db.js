const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "sqlite", // Utilise SQLite ici
    storage: ':memory:', // Utilise une base de données en mémoire pour les tests
    logging: false, // Empêche l'affichage des logs SQL
});

const connectDB = async () => {
    try {
        // Synchronisation des modèles Sequelize (création des tables si elles n'existent pas)
        await sequelize.sync({ force: true });  // force: true pour forcer la création des tables
        console.log("Base de données synchronisée");
    } catch (error) {
        console.error("Erreur lors de la synchronisation de la base de données", error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };