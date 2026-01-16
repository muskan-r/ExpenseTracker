import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Navbar />

      <div className="home">
        {/* HERO */}
        <div className="hero">
          <div className="hero-text">
            <h1>Expense Tracker</h1>
            <h1>Manage Your Money Smarter</h1>
            <p>
              Track expenses, analyze spending, and take control of your
              financial life with ExpenseTracker.
            </p>

           
          </div>

          <div className="hero-image">
            <img src="/hero.png" alt="Expense tracking" />
          </div>
        </div>
         <div className="home-buttons">
              {!token ? (
                <>
                  <Link to="/signup" className="btn">
                    Get Started
                  </Link>
                  {/* <Link to="/login" className="btn secondary">
                    Login
                  </Link> */}
                </>
              ) : (
                <Link to="/dashboard" className="btn">
                  Go to Dashboard
                </Link>
              )}
            </div>

        {/* FEATURES */}
        <section className="features">
          <h2>Why Choose ExpenseTracker?</h2>

          <div className="feature-cards">
            <div className="feature-card">
              <i className="fa-solid fa-wallet"></i>
              <h3>Track Expenses</h3>
              <p>Log every expense quickly and accurately.</p>
            </div>

            <div className="feature-card">
              <i className="fa-solid fa-chart-pie"></i>
              <h3>Analyze Spending</h3>
              <p>Understand where your money goes with charts.</p>
            </div>

            <div className="feature-card">
              <i className="fa-solid fa-bullseye"></i>
              <h3>Stay on Budget</h3>
              <p>Set limits and avoid overspending.</p>
            </div>
          </div>
        </section>
        <section className="showcase">
          <h2>Track. Analyze. Save.</h2>
          <p className="showcase-subtext">
            See how BudgetBuddy helps you stay in control of your money.
          </p>

          <div className="showcase-images">
            <img src="/img1.png" alt="Dashboard view" />
            <img src="/img2.png" alt="charts view" />
            <img src="/img3.png" alt="mobile view" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
    {/* About */}
    <div className="footer-section about">
      <h3>About ExpenseTracker</h3>
      <p>
        ExpenseTracker helps you manage your finances easily, track expenses, and stay on top of your budget.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: support@expensetracker.com</p>
      <p>Phone: +91 12345 67890</p>
      <p>Address: 123 Finance Street, India</p>
    </div>

    {/* Social Media */}
    <div className="footer-section social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>© 2026 ExpenseTracker. All rights reserved.</p>
  </div>
</footer>
      </div>
    </>
  );
}
