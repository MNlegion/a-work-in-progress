import { FaRegTrashAlt } from "react-icons/fa";
import { deleteItem } from "../../features/items/itemSlice";
import { useDispatch } from "react-redux";

function ItemOverview({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.name} />
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <button
        onClick={() => dispatch(deleteItem(item._id))}
        className="close"
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default ItemOverview;
