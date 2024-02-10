const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from server!' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create item!' });
});

router.put('/', (req, res) => {
    res.status(200).json({ message: 'Hello from server!' });
});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from server!' });
});




module.exports = router;