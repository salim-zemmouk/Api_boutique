const express = require("express");
const { connectDB } = require("./config/db"); // Assurez-vous que connectDB() gère la connexion à la base de données
const produitRoutes = require("./routes/produitRoutes");
const clientRoutes = require("./routes/clientRoutes");
const vendeurRoutes = require("./routes/vendeurRoutes");
const commandeRoutes = require("./routes/commandeRoutes");

const app = express();

// Utilisation de express.json() pour analyser les requêtes JSON
app.use(express.json());

// Connexion à la base de données
connectDB();

// Utilisation des routes
app.use("/api/produits", produitRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/vendeurs", vendeurRoutes);
app.use("/api", commandeRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

module.exports = app;