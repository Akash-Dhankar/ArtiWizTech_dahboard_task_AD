import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import {
    LuLayoutDashboard,
    LuUpload,
    LuFileText,
    LuGitBranch,
    LuCreditCard,
    LuShieldCheck,
    LuSettings,
} from "react-icons/lu";
import {FaRegChartBar} from "react-icons/fa";

function Sidebar() {
   const menuItems = [
    {name:"Dashboard",icon:<LuLayoutDashboard size={18}/>},
    {name:"Data Import",icon:<LuUpload size={18}/>},
    {name:"Templates",icon:<LuFileText size={18}/>},
    {name:"Sequences",icon:<LuGitBranch size={18}/>},
    {name:"Analytics",icon:<FaRegChartBar size={18}/>},
    {name:"Payment Portal",icon:<LuCreditCard size={18}/>},
    {name:"Compliance",icon:<LuShieldCheck size={18}/>},
    {name:"Settings",icon:<LuSettings size={18}/>},
   ];

   return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
            <div className="flex-items-center justify-center">
                <FaRegBuilding className="bg-black p-2 rounded-full text-white w-10 h-10"/>
            </div>
            <h2 className="text-xl font-bold">CollectPro</h2>
        </div>
        <nav className="space-y-3">
            {menuItems.map((item,idx)=>(
                <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </nav>
        <div className="mt-auto flex items-center space-x-2 text-sm text-black-500">
            <FaRegUserCircle className="w-6 h-6"/>
            <div>
                <p className="font-small">John Doe</p>
                <p className="font-small">Admin</p>
            </div>
        </div>
    </aside>
   );

}

export default Sidebar;