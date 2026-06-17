import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
);

function InventoryChart({ products }) {
  const data = {
    labels: products.map((product) => product.name),

    datasets: [
      {
        label: "Stock",
        data: products.map((product) => product.stock),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    //le graphique s’adapte automatiquement à la taille de l’écran
    responsive: true,
    maintainAspectRatio: false,
    //affiche ou cache le nom du dataset
    plugins: {
      legend: {
        display: false,
      },
    },
    //ça force l’axe Y à commencer à 0
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full  flex flex-col">
      <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
        Nombre de Stocks par produit
      </h2>
      <div className="relative w-full min-h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default InventoryChart;
