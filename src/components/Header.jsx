import React from "react";
function Header() {
   return (
    <div className="flex justify-between items-center mb-6 mt-6 ml-6">
        <div>
            <h1 className="text-2xl font-bold">DashBoard</h1>
            <p className="text-gray-500">
                Overview of your collections performance
            </p>
        </div>
        <div className="flex gap-2">
            <button className = "px-2.5 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-200">
                Export Report
            </button>

            <button className="px-2.5 py-1.5 bg-black text-white rounded-lg hover:bg-gray-900 mr-6">
                New Campaign
            </button>
        </div>
    </div>
   );
}

export default Header;