import React from "react";
import { Bell, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-50 h-20 flex items-center rounded-2xl shadow-sm border border-gray-100 mb-6 transition-all">
      <div className="flex justify-between items-center px-6 w-full">
        {/* Barre de recherche */}
        <div className="relative group">
          <Search
            className="text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-72 md:w-96 pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-gray-700 text-sm font-medium placeholder:text-gray-400"
          />
        </div>

        {/* Actions utilisateur */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-blue-600 transition-colors">
            <Bell size={22} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Séparateur */}
          <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

          {/* Profil Utilisateur */}
          <button className="flex items-center gap-3 p-1.5 pr-3 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 text-left">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-500 to-orange-400 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">MS</span>
            </div>

            <div className="hidden md:flex flex-col">
              <span className="text-sm font-bold text-gray-900 leading-none mb-1">
                Mame Saye
              </span>
              <span className="text-xs font-medium text-blue-600 leading-none">
                Admin
              </span>
            </div>

            <ChevronDown className="hidden md:block w-4 h-4 text-gray-400 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
