import Sidebar from "./components/sidebar";
import Header from "./components/header";
import useProduct from "./hooks/useProducts";
import { Wallet } from "lucide-react";
import { Boxes } from "lucide-react";
import { Package } from "lucide-react";
import ListProducts from "./components/ListProducts";
import InventoryChart from "./components/InventoryChart";
import CategoryDoughnut from "./components/doghnuts";
import { useEffect } from "react";

const App = () => {
  //App possede le state qui est product. C'est ici qu'il est initialiser
  const { products, addProduct } = useProduct();

 console.log("App", products)
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0,
  );
  const totalValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );

  return (
    <div className="min-h-screen w-screen bg-linear-to-r from-white via-white to-zinc-50 relative overflow-hidden">
      <Sidebar />

      <main className="ml-36 p-6 relative">
        {products && products.length > 0 ? (
          <>
            <div className="w-full px-7 space-y-5">
              <Header />

              <div className="flex flex-col items-start ">
                <div className="py-5">
                  <h1 className="text-black text-2xl font-bold">Dashboard</h1>

                  <p className="text-gray-500">
                    Voici les informations clés de votre boutique en ligne
                  </p>
                </div>

                <div className="grid grid-cols-12 w-full gap-5">
                  {/* Nombre produits */}
                  <div className="col-span-4 h-36 rounded-2xl bg-white border border-gray-100 p-6 flex justify-between items-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div>
                      <p className="text-gray-500 text-sm">
                        Nombre de produits
                      </p>

                      <h2 className="text-black text-3xl font-bold mt-2">
                        {products.length}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Package className="text-blue-400" size={28} />
                    </div>
                  </div>

                  {/* Stock */}
                  <div className="col-span-4 h-36 rounded-2xl bg-white border border-gray-100 p-6 flex justify-between items-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div>
                      <p className="text-gray-500 text-sm">Stock disponible</p>

                      <h2 className="text-black text-3xl font-bold mt-2">
                        {totalStock}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Boxes className="text-green-400" size={28} />
                    </div>
                  </div>

                  {/* Valeur stock */}
                  <div className="col-span-4 h-36 rounded-2xl bg-white border border-gray-100 p-6 flex justify-between items-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div>
                      <p className="text-gray-500 text-sm">Valeur du stock</p>

                      <h2 className="text-black text-2xl font-bold mt-2">
                        {totalValue.toLocaleString()} FCFA
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Wallet className="text-purple-400" size={28} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-start items-center py-5">
                <InventoryChart products={products} />
                <CategoryDoughnut produits={products} />
              </div>
              <div className="py-5">
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
