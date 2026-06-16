import React from "react";
import useProducts from "../hooks/useProducts";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Produit introuvable
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <Link to="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Retour
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* Image placeholder */}
        <div className="h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 text-lg">Image produit</span>
        </div>

        {/* Informations */}
        <div className="flex flex-col justify-center">
          <span className="text-sm text-blue-600 font-semibold">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6">
            <p className="text-3xl font-bold text-green-600">
              {product.price.toLocaleString()} FCFA
            </p>

            <p className="mt-2 text-gray-500">
              Stock disponible :
              <span className="font-semibold text-gray-800 ml-1">
                {product.stock}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
