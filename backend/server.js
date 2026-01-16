import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/Database.js';
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expenses.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());  // Parses JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));