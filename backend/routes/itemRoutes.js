const express = require('express');
const router = express.Router();
const { getItems, getItem, updateItem, createItem, deleteItem } = require('../controllers/itemController');

// condensed routes
router.route('/').get(getItems).post(createItem);
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem);


module.exports = router;