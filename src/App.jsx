import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import useProduct from "./hooks/useProducts";


const App = () => {
  const { products, addProduct } = useProduct();

  return (
    <div className="min-h-screen w-screen bg-neutral-950 relative overflow-hidden">
      <Sidebar />

      <main className="ml-36 p-6 relative">
        <div className="w-full">
          <Header />
        </div>
      </main>
    </div>
  );
};

export default App;
