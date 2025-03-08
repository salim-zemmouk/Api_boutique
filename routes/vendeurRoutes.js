const express = require("express");
const { getVendeurs, createVendeur } = require("../controllers/vendeurController");
const router = express.Router();

router.get("/", getVendeurs);
router.post("/", createVendeur);

module.exports = router;
