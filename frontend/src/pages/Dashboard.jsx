import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "../components/Items/ItemForm";
import Spinner from "../components/Spinner";
import { getUserItems, reset } from "../features/items/itemSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  // If user is not logged in, redirect to main home page
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getUserItems());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome to your Dashboard, {user && user.name}!</h1>
        <p>Items Dashboard</p>
      </section>

      <ItemForm />
    </>
  );
}

export default Dashboard;
