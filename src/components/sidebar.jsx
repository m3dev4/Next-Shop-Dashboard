import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-36 bg-amber-50 shadow-md border-r border-stone-200">
      <div className="flex flex-col items-center space-y-5 py-4">
        <header className="flex items-center gap-2">
          <div className="h-6 w-6 bg-red-400 rounded-sm flex items-center justify-center text-white shadow-md">
            N
          </div>
          <span className="text-xl font-semibold">Next Shop</span>
        </header>

        <div className="h-0.5 w-full bg-stone-300" />

        <nav className="w-full px-3">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 hover:text-gray-900"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/creer-produit"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 hover:text-gray-900"
              >
                Créer un produit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;