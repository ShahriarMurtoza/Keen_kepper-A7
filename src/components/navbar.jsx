import React from "react";
import { Home, Clock, BarChart2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-lg font-semibold text-gray-800">
        Keen<span className="text-green-600">Keeper</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        
        {/* Home (Active) */}
        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          <Home size={16} />
          Home
        </button>

        {/* Timeline */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <Clock size={16} />
          Timeline
        </button>

        {/* Stats */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium">
          <BarChart2 size={16} />
          Stats
        </button>

      </div>
    </nav>
  );
};

export default Navbar;