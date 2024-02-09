const express = require('express');
const router = express.Router();
const { getItems, getItemById , createItem, updateItem, deleteItem } = require('../controllers/itemController');


// Get all items and create a new item
router.route('/').get(getItems).post(createItem);

// Get single item by ID, update an item, and delete an item
router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem);


// Export the router
module.exports = router;
