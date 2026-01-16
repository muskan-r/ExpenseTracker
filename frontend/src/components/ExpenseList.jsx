import axios from "axios";

export default function ExpenseList({ expenses, onDelete }) {
  const token = localStorage.getItem("token");

  const remove = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/expenses/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onDelete(id);
  };

  return (
//     <ul className="expense-list">
//   {expenses.map((e) => (
//     <li className="expense-item" key={e._id}>
//       <div>
//         <strong>{e.description}</strong>
//         <span className="category">{e.category}</span>
//       </div>

//       <div className="right">
//         <span className="amount">₹{e.amount}</span>
//         <button onClick={() => remove(e._id)}>✕</button>
//       </div>
//     </li>
//   ))}
// </ul>
//   )
// }

<ul className="expense-list">
      {expenses.map((e) => (
        <li className="expense-item card" key={e._id}>
          <div className="left">
            <h4>{e.description}</h4>
            <span className="category">{e.category}</span>
          </div>

          <div className="right">
            <span className="amount">₹{e.amount}</span>
            <button
              className="delete-btn"
              onClick={() => remove(e._id)}
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}