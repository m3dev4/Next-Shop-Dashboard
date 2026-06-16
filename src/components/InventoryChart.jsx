import { Line } from "react-chartjs-2";

import {
 Chart as ChartJS,
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement,
 Tooltip,
 Legend,
 Filler
} from "chart.js";


ChartJS.register(
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement,
 Tooltip,
 Legend,
 Filler
);



function InventoryChart({products}){


const data = {

labels: products.map(product => product.name),

datasets:[
{
label:"Stock",
data: products.map(product => product.stock),
borderColor: "#4F46E5",
backgroundColor: "rgba(79, 70, 229, 0.2)",
fill: true,
tension: 0.4,
pointRadius: 5
}
]

}

const options = {
    //le graphique s’adapte automatiquement à la taille de l’écran
    responsive: true,
    //affiche ou cache le nom du dataset
    plugins: {
      legend: {
        display: false
      }
    },
    //ça force l’axe Y à commencer à 0
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };



return (

<div className="p-5 rounded-xl h-[50%] w-[50%] ">
<h2 className="text-dark mb-5">Nombre de Stocks par produit</h2>
<Line data={data} options={options}/>
</div>

)

}

export default InventoryChart;