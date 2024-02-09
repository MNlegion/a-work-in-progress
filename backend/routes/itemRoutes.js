const express = require('express');
const router = express.Router();
const { getItems, getItemById , createItem, updateItem, deleteItem } = require('../controllers/itemController');


// Get all items
router.get('/items', getItems);

// Get single item by ID
router.get('/items/:id', getItemById);

// Create a new item
router.post('/items', createItem);

// Update an item
router.put('/items/:id', updateItem);

// Delete an item
router.delete('/items/:id', deleteItem);


// Export the router
module.exports = router;
