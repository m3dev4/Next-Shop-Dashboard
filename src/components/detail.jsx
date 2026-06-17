import useProducts from "../hooks/useProducts";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";

const Detail = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-linear-to-r from-white via-white to-zinc-50 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Produit introuvable
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-white via-white to-zinc-50 p-6 md:p-12">
      <Link
        to="/"
        className="flex max-w-3xl mx-auto items-start  text-gray-600 hover:text-blue-600 font-medium transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour au Dashboard
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
        {/* En-tête : Titre et Prix */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-gray-100 pb-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {product.name}
            </h1>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-500 font-medium mb-1">
              Prix unitaire
            </p>
            <p className="text-4xl font-bold text-green-600">
              {product.price.toLocaleString()}{" "}
              <span className="text-2xl">FCFA</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description ||
              "Aucune description disponible pour ce produit."}
          </p>
        </div>

        {/* Bloc Stock */}
        <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
              <Package className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Stock disponible
              </p>
              <p className="text-xl font-bold text-gray-900">
                {product.stock} unités
              </p>
            </div>
          </div>

          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-center ${
              product.stock > 10
                ? "bg-green-100 text-green-700"
                : product.stock > 0
                  ? "bg-orange-100 text-orange-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 10
              ? "En stock"
              : product.stock > 0
                ? "Stock faible"
                : "Rupture de stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
