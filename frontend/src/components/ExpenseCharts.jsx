import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function ExpenseCharts({ expenses }) {
  // ---- CATEGORY DATA ----
  const categoryTotals = {};

  expenses.forEach((e) => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + Number(e.amount);
  });

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["#66bb6a", "#42a5f5", "#ffb74d", "#ef5350"],
      },
    ],
  };

  // ---- DATE DATA ----
  const barData = {
    labels: expenses.map((e) =>
      new Date(e.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((e) => e.amount),
        backgroundColor:"#66bb6a"
      },
    ],
  };

  // const commonOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  // const barOptions = {
  //   ...commonOptions,
  //   scales: {
  //     x: {
  //       ticks: {
  //         maxRotation: 45,
  //         minRotation: 45,
  //       },
  //     },
  //   },
  // };

  const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 12,
        font: {
          size: 12,
        },
      },
    },
  },
};

const barOptions = {
  ...commonOptions,
  scales: {
    x: {
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        font: {
          size: 11,
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 11,
        },
      },
    },
  },
};


  return (
    // <div className="charts">
    //   <div className="chart-card">
    //     <h3>Expenses by Category</h3>
    //     <Pie data={pieData} />
    //   </div>

    //   <div className="chart-card">
    //     <h3>Expenses Over Time</h3>
    //     <Bar data={barData} />
    //   </div>
    // </div>
    <div className="charts">
  <div className="chart-card">
    <h3>Expenses by Category</h3>
    <div className="chart-wrapper pie">
      <Pie data={pieData} options={commonOptions} />
    </div>
  </div>

  <div className="chart-card">
    <h3>Expenses Over Time</h3>
    <div className="chart-wrapper bar">
      <Bar data={barData} options={barOptions} />
    </div>
  </div>
</div>

  );
}
