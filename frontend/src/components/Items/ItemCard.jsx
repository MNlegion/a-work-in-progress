import React from 'react'
import ItemForm from './ItemForm'

function ItemCard() {
  return (
    <section className="items">
      <div className="grid">
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="Item" />
          <h3>Item Name</h3>
          <p>Price: $100</p>
          <p>Category: Electronics</p>
          <p>Quantity: 5</p>
          <button className='btn btn-card'>Edit</button>
          <button className='btn btn-card'>Delete</button>
        </div>
      </div>
      <ItemForm />
    </section>
  )
}

export default ItemCard