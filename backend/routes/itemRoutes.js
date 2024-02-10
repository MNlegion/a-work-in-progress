const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from server!' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ message: 'Get item by id' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create item!' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: 'Update Item' });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'Delete Item' });
});




module.exports = router;