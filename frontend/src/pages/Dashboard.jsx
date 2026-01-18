import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseCharts from "../components/ExpenseCharts";
import Footer from "../components/Footer";


export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${API_URL}/api/expenses`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setExpenses(res.data))
      .catch(() => navigate("/login"));
  }, [token, navigate]);

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Welcome to your Dashboard 👋</h2>

        <div className="stats">
          <div className="feature-card">
            Total Expenses<br />₹{total.toLocaleString()}
          </div>
          <div className="feature-card">
            Total Entries<br />{expenses.length}
          </div>
          <div className="feature-card">
            Average Expense<br />
            ₹{expenses.length ? Math.round(total / expenses.length).toLocaleString() : 0}
          </div>
        </div>

        <ExpenseCharts expenses={expenses} />

        <ExpenseForm onAdd={(e) => setExpenses([e, ...expenses])} />

        {expenses.length === 0 ? (
          <p ><h3 className="empty-text">No expenses added yet.</h3></p>
        ) : (
          <ExpenseList
            expenses={expenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((e) => e._id !== id))
            }
          />
        )}
      </div>
      <Footer />
    </>
    
  );
}
