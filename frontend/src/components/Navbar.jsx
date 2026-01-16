import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
      <img src={logo} alt="BudgetBuddy Logo" className="logo" />
      <h2 className="logoname">BudgetBuddy</h2>
      </Link>
      

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "X":"☰"}
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        {token && (
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
        )}

        {!token ? (
          <>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/signup" className="btn" onClick={() => setOpen(false)}>
              Signup
            </Link>
          </>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
