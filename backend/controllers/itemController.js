const asyncHandler = require("express-async-handler");
const Item = require("../models/itemModel");

// @desc: Get all items
// @route: GET /api/items
// @access: Public
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});

  res.status(200).json(items);
});

// @desc: Get single item
// @route: GET /api/items/:id
// @access: Public
const getItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  res.status(200).json(item);
});

// @desc: Create item
// @route: POST /api/items
// @access: Private
const createItem = asyncHandler(async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.description ||
    !req.body.imageUrl ||
    !req.body.category ||
    !req.body.quantity
  ) {
    res.status(400);
    throw new Error("Please provide item data");
  }

  const item = await Item.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    quantity: req.body.quantity,
  });

  res.status(200).json(item);
});

// @desc: Update item
// @route: PUT /api/items/:id
// @access: Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(updatedItem);
});

// @desc: Delete item
// @route: DELETE /api/items/:id
// @access: Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  await item.deleteOne();

  res.status(200).json({ message: "Item removed" });
});

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
