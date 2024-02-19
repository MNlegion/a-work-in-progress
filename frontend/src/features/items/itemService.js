import axios from "axios";

const API_URL = '/api/items/';

// Get all items
const getItems = async () => {};

// Get single item
const getItem = async (id) => {};

// Create item
const createItem = async (itemData) => {};

// Update item
const updateItem = async (itemData) => {};

// Delete item
const deleteItem = async (id) => {};

const itemService = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
};

export default itemService;