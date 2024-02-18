import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>A Work In Progress</h1>
        </Link>
      </div>
        <nav>
            <ul>
            <li>
                <Link to="/dashboard">
                <FaUser /> Dashboard
                </Link>
            </li>
            <li>
                <Link to="/login">
                <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                <FaUserPlus /> Register
                </Link>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
