import React from "react";
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
        <h2 className="text-xl font-bold mb-6">CollectPro</h2>
        <nav className="space-y-3">
            {menuItems.map((item,idx)=>(
                <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </nav>
        <div className="mt-auto text-sm text-gray-500">
            <p className="font-medium">John Doe</p>
            <p>Admin</p>
        </div>
    </aside>
   );

}

export default Sidebar;