const express = require("express");
const router = express.Router();
const { createCommande, getCommandes } = require("../controllers/commandeController");

// Préfixer avec /api
router.post("/commandes", createCommande);
router.get("/commandes", getCommandes);

module.exports = router;
