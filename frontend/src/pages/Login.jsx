import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        form
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h2>Login here</h2>

          <form onSubmit={handleSubmit}>
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

            <button type="submit">Login</button>
            </form>
             <p style={{ marginTop: "10px" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{color:"#007bff"}}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
