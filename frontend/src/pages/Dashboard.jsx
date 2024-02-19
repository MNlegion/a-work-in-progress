import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemForm from "../components/Items/ItemForm";


function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  // If user is not logged in, redirect to main home page
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

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
