// @desc: Get all items
// @route: GET /api/items
// @access: Public
const getItems = (req, res) => {
    res.status(200).json({ message: 'Get all items' });
}

// @desc: Get single item
// @route: GET /api/items/:id
// @access: Public
const getItem = (req, res) => {
    res.status(200).json({ message: `Get Item ${req.params.id}` });
}

// @desc: Create item
// @route: POST /api/items
// @access: Private
const createItem = (req, res) => {
    res.status(200).json({ message: 'Create item!' });
}

// @desc: Update item
// @route: PUT /api/items/:id
// @access: Private
const updateItem = (req, res) => {
    res.status(200).json({ message: `Update Item ${req.params.id}` });
}

// @desc: Delete item
// @route: DELETE /api/items/:id
// @access: Private
const deleteItem = (req, res) => {
    res.status(200).json({ message: `Delete Item ${req.params.id}` });
}



module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
