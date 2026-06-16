import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import useProduct from "./hooks/useProducts";
import { useEffect } from "react";
import { Wallet } from "lucide-react";
import { Boxes } from "lucide-react";
import { Package } from "lucide-react";
import ListProducts from "./components/ListProducts";

const App = () => {
  //App possede le state qui est product. C'est ici qu'il est initialiser
  const { products, addProduct } = useProduct();

  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0,
  );
  const totalValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );

  return (
    <div className="min-h-screen w-screen bg-slate-50 relative overflow-hidden">
      <Sidebar />

      <main className="ml-36 p-6 relative">
        {products && products.length > 0 ? (
          <>
            <div className="w-full">
              <Header />

              <div className="flex flex-col items-start">
                <div className="py-5">
                  <h1 className="text-black text-2xl font-bold">Dashboard</h1>

                  <p className="text-gray-500">
                    Voici les informations clés de votre boutique en ligne
                  </p>
                </div>

                <div className="grid grid-cols-12 w-full gap-5">
                  {/* Nombre produits */}
                  <div className="col-span-4 h-36 rounded-2xl bg-gray-900/80 border border-gray-800 p-6 flex justify-between items-center shadow-lg">
                    <div>
                      <p className="text-gray-400 text-sm">
                        Nombre de produits
                      </p>

                      <h2 className="text-white text-3xl font-bold mt-2">
                        {products.length}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Package className="text-blue-400" size={28} />
                    </div>
                  </div>

                  {/* Stock */}
                  <div className="col-span-4 h-36 rounded-2xl bg-gray-900/80 border border-gray-800 p-6 flex justify-between items-center shadow-lg">
                    <div>
                      <p className="text-gray-400 text-sm">Stock disponible</p>

                      <h2 className="text-white text-3xl font-bold mt-2">
                        {totalStock}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Boxes className="text-green-400" size={28} />
                    </div>
                  </div>

                  {/* Valeur stock */}
                  <div className="col-span-4 h-36 rounded-2xl bg-gray-900/80 border border-gray-800 p-6 flex justify-between items-center shadow-lg">
                    <div>
                      <p className="text-gray-400 text-sm">Valeur du stock</p>

                      <h2 className="text-white text-2xl font-bold mt-2">
                        {totalValue.toLocaleString()} FCFA
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Wallet className="text-purple-400" size={28} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <ListProducts produits={products} />
              </div>
            </div>
          </>
        ) : (
          <p className="text-white">Aucune données</p>
        )}
      </main>
    </div>
  );
};

export default App;
