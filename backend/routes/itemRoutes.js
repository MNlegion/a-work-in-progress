const express = require("express");
const router = express.Router();
const {
  getItems,
  getItem,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/itemController");
const { protect } = require("../middleware/authMiddleware");

// condensed routes
router.route("/").get(protect, getItems).post(protect, createItem);
router.route("/:id").get(protect, getItem).put(protect, updateItem).delete(protect, deleteItem);

module.exports = router;
