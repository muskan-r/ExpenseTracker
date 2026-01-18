import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API_URL}/api/auth/register`,
        form
      );
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h2>Create your Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button type="submit">Signup</button>
          </form>
          <p style={{ marginTop: "10px" }}>
                      Already have an account?{" "}
                      <Link to="/login" style={{color:"#007bff"}}>
                        login
                      </Link>
                    </p>
        </div>
      </div>
    </>
  );
}
