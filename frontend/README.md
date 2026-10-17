# 💰 Expense Management System

A MERN stack web application that helps users manage daily expenses, organize spending by category, set budgets, and monitor their finances through an interactive dashboard.

## ✨ Features

- User authentication (Signup and Login)
- Add, update, delete, and view expenses
- Manage expense categories
- Set and update budgets
- Dashboard for tracking expenses and budgets
- Visual expense analysis using charts

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Language:** JavaScript
- **Tools:** Git, GitHub, Visual Studio Code

## 📂 Project Structure

```text
Expense-Tracker/
├── backend/
│   ├── config/
│   │   └── Database.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Expense.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── expenses.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ExpenseCharts.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseList.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
cd Expense-Tracker
```

**2. Install backend dependencies**

```bash
cd backend
npm install
```

**3. Install frontend dependencies**

Open a new terminal and run:

```bash
cd frontend
npm install
```

**4. Configure environment variables**

Add your MongoDB connection string and other required configuration values to the backend `.env` file. Configure frontend environment variables if required.

**5. Run the application**

Start the backend and frontend separately using the scripts defined in their respective `package.json` files.

## 👩‍💻 Author

**Muskan Gulati**  
B.Tech Computer Science and Engineering Student

GitHub: [Muskan Gulati](https://github.com/)

