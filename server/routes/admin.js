const { json } = require("express");
const express = require("express");
const adminRoute = express.Router();
const admin = requrie("../middlewares/admin");

// Add Prodct
adminRoute.post("/admin/add-product", admin, async (req, res) => {
  try {
    const { name, description, images, quantity, price, category } = req.body;
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
