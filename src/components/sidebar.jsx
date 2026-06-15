import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState(window.location.pathname)



  return (
    <div className="h-screen fixed top-0 left-0 w-36 bg-amber-50 shadow-md ">
      <div className="flex items-center flex-col space-y-5">
         <header className="flex items-center gap-2 mt-2 py-2">
           <div className="h-6 w-6 bg-red-400 rounded-sm flex items-center justify-center text-white shadow-md ">
             N
           </div>
           <span className="text-xl font-semibold ">
            Next Shop
           </span>
         </header>
         <div className=" h-0.5 w-36 bg-stone-300" />
         {/* nav */}
         <nav>
            <ul>
              <li>
                Dashboard
              </li>
              <li></li>
            </ul>
         </nav>
      </div>
    </div>
  );
};

export default Sidebar;
