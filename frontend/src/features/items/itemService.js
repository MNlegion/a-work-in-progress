import axios from "axios";

const API_URL = "/api/items/";

// Create item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, itemData, config);
  return response.data;
};

// Get all user items
const getUserItems = async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Get single item
const getItem = async (id) => {};

// Update item
const updateItem = async (itemData) => {};

// Delete item
const deleteItem = async (id) => {};

const itemService = {
  createItem,
  getUserItems,
  getItem,
  updateItem,
  deleteItem,
};

export default itemService;
