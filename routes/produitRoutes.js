const express = require("express");
const { getProduits, createProduit } = require("../controllers/produitController");
const router = express.Router();

router.get("/", getProduits);
router.post("/", createProduit);

module.exports = router;
