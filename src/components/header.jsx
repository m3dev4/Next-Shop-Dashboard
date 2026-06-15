import React from "react";
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex w-full bg-gray-50 h-22 absolute top-0 left-0">
      <div className="flex justify-between items-center px-6 w-full">
        <div className="">
          <input
            type="text"
            placeholder="Recherche"
            className="w-96 px-3 py-1 rounded-md border focus:border-primary outline-none"
          />
        </div>
        <div className="flex gap-5 items-center">
           <Bell />
           <div className="w-35 h-10 bg-background shadow-sm flex space-x-1">
            <div className="flex flex-col items-start">
               <h2 className="text-sm font-semibold">Mame Saye</h2>
               <span className="text-xs">Admin</span>
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
