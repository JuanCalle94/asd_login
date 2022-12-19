import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        ASD
      </Link>

      <div className="navbar__info">
        <span>{user?.email}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};
