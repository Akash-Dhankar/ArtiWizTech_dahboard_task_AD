import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { LiaFileAlt } from "react-icons/lia";
import { RiGroupLine } from "react-icons/ri";
function QuickActions() {
    const actions = [
        {icon:<MdOutlineFileUpload className="text-md mb-2"/>,label:"Import Data"},
        {icon:<LiaFileAlt className="text-md mb-2" />,label:"New Template"},
        {icon:<RiGroupLine className="text-md mb-2"/>,label:"Create Campaign"},
        {icon:<AiOutlineBarChart className="text-md mb-2"/>,label:"View Reports"},
    ];

    return(
        <div className="border border-gray-200 rounded-2xl p-4 bg-white">
            <h3 className="text-sm mb-4">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-4">
              {actions.map((action,idx)=>(
                <div key={idx} className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-300 cursor-pointer transition">
                    {action.icon}
                <span className="text-sm text-gray-700">{action.label}</span>
                </div>
              ))}
            </div>
        </div>
    );
}

export default QuickActions;