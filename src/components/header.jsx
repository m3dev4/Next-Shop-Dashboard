import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-slate-900 sticky top-0 h-22 flex rounded-lg shadow-md">
      <div className="flex justify-between items-center px-6 w-full">
        <input
          type="text"
          placeholder="Recherche"
          className="w-96 px-3 py-1 rounded-md border outline-none"
        />

        <div className="flex gap-5 items-center">
          <Bell />

          <div className="w-35 h-10  shadow-sm flex items-center gap-2 px-2 rounded-md">
            <div className="flex flex-col items-start">
              <h2 className="text-sm font-semibold text-white">Mame Saye</h2>
              <span className="text-xs text-slate-400">Admin</span>
            </div>

            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
              <h1 className="text-white font-bold text-base">M</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
