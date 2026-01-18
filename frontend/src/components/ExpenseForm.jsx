import { useState } from 'react';
import axios from 'axios';

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({ description: '', amount: '', category: '' });
  const token = localStorage.getItem('token');
  const API_URL = import.meta.env.VITE_API_URL;

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${API_URL}/api/expenses`,
      form,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onAdd(res.data);
    setForm({ description: '', amount: '', category: '' });
  };

  return (
//     <div className="expense-form">
//     <div className='form'>
//         <h2>Add your new expenses</h2>
//       </div>
//     <form onSubmit={submit}>
//       <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
//       <input type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
//       <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
//       <button>Add Expense</button>
//     </form>
//     </div>
//   );
// }

<div className="expense-form card">
      <h2>Add New Expense</h2>

      <form onSubmit={submit}>
        <div className="form-group">
          <label>Description</label>
          <input
            placeholder="e.g. Grocery shopping"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Amount (₹)</label>
          <input
            type="number"
            placeholder="e.g. 500"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            placeholder="e.g. Food, Shopping"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          ➕ Add Expense
        </button>
      </form>
    </div>
  );
}
