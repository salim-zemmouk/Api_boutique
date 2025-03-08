const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
const produitRoutes = require("./routes/produitRoutes");
const clientRoutes = require("./routes/clientRoutes");
const vendeurRoutes = require("./routes/vendeurRoutes");
const commandeRoutes = require("./routes/commandeRoutes");

const app = express();

app.use(bodyParser.json());
connectDB();

app.use("/api/produits", produitRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/vendeurs", vendeurRoutes);
app.use("/api", commandeRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

module.exports = app;