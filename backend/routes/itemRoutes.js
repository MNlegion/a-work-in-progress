const express = require('express');
const router = express.Router();
const { getItems, getItem, updateItem, createItem, deleteItem } = require('../controllers/itemController');

// Routes
router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);


module.exports = router;