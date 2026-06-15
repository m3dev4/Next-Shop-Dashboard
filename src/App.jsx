import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import useProducts from './hooks/useProducts';
import StatCard from "./components/StatCard";

const App = () => {
  const { products, addProduct } = useProducts();

  return (
    <div className="min-h-screen w-screen bg-neutral-950 relative overflow-hidden">
      <Sidebar />

      <main className="ml-36 p-6 relative">
        <div className="w-full flex flex-col">
          <Header />
          <StatCard />
        </div>
      </main>
    </div>
  );
};

export default App;
