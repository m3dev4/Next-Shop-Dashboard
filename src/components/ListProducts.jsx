import { Link } from "react-router-dom";
import { useState } from "react";
import EditProductModal from "./EditProductModal";

function ListProducts({ produits, deleteProduct, updateProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_1").showModal();
  };

  function handleClick(id){
    deleteProduct(id)
  }
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-800 mb-6">
        Liste des Produits
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
            <tr>
              <th className="py-4 px-4 rounded-l-xl">Nom</th>
              <th className="py-4 px-4">Prix</th>
              <th className="py-4 px-4">Stock</th>
              <th className="py-4 px-4">Catégorie</th>
              <th className="py-4 px-4 rounded-r-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((p) => (
              <tr
                key={p.id}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-4 font-medium text-gray-800">
                  {p.name}
                </td>
                <td className="py-4 px-4">{p.price} FCFA</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      p.stock > 10
                        ? "bg-green-50 text-green-600"
                        : p.stock > 0
                          ? "bg-orange-50 text-orange-600"
                          : "bg-red-50 text-red-600"
                    }`}
                  >
                    {p.stock}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                    {p.category}
                  </span>
                </td>
                <td className="py-4 px-4 flex gap-2">
                  <button onClick={() => openModal(p)} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    Modifier
                  </button>
                  <button onClick={()=>handleClick(p.id)} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                    Supprimer
                  </button>
                  <Link to={`/detail/${p.id}`}>
                    <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                      Détails
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <EditProductModal updateProduct={updateProduct} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
      </div>
    </div>
  );
}

export default ListProducts;
