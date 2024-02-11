const asyncHandler = require("express-async-handler");

// @desc: Get all items
// @route: GET /api/items
// @access: Public
const getItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all items" });
});

// @desc: Get single item
// @route: GET /api/items/:id
// @access: Public
const getItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Item ${req.params.id}` });
});

// @desc: Create item
// @route: POST /api/items
// @access: Private
const createItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Create item!" });
});

// @desc: Update item
// @route: PUT /api/items/:id
// @access: Private
const updateItem = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide data");
  }

  res.status(200).json({ message: `Update Item ${req.body.text}` });
});

// @desc: Delete item
// @route: DELETE /api/items/:id
// @access: Private
const deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Item ${req.params.id}` });
});

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
