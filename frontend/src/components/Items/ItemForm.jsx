import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createItem } from "../../features/items/itemSlice";

function ItemForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createItem({ name, price, description, imageUrl, category, quantity }))
    setName('')
    setPrice('')
    setDescription('')
    setImageUrl('')
    setCategory({selected: ''})
    setQuantity('')

    console.log("Form submitted");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Add New Item</h2>
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price $</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="" selected disabled>
              Select a category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemForm;
