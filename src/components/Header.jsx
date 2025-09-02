import React from "react";
function Header() {
   return (
    <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold">DashBoard</h1>
            <p className="text-gray-500">
                Overview of your collections performance
            </p>
        </div>
        <div className="flex gap-2">
            <button className = "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                Export Report
            </button>

            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                New Campaign
            </button>
        </div>
    </div>
   );
}

export default Header;