import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDoughnut = ({ produits = [] }) => {
  const totalStock = produits.reduce((acc, item) => acc + item.stock, 0);

  const data = {
    labels: produits.map((p) => p.category),

    datasets: [
      {
        label: "Stock",

        data: produits.map((p) => p.stock),

        backgroundColor: ["#3b82f6", "#22c55e", "#f97316", "#a855f7"],

        borderWidth: 0,

        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "75%",

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          padding: 20,

          usePointStyle: true,

          pointStyle: "circle",
        },
      },

      tooltip: {
        backgroundColor: "#111827",

        padding: 12,

        cornerRadius: 10,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-1/2 mx-2 flex flex-col">
      <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
        Stock par catégorie
      </h2>

      <div className="relative w-full flex-1 min-h-[300px]">
        <Doughnut data={data} options={options} />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
          <span className="text-3xl font-bold text-gray-800">{totalStock}</span>
          <span className="text-sm text-gray-500">Produits</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryDoughnut;
