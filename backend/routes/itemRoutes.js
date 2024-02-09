const express = require('express');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

// Get all items
router.get('/items', getItems);

// Create a new item
router.post('/items', createItem);

// Update an item
router.put('/items/:id', updateItem);

// Delete an item
router.delete('/items/:id', deleteItem);

// Export the router
module.exports = router;
