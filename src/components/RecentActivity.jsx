import React from "react";

function RecentActivity() {
    const activities = [
        {
            text:"Payment received",
            subtext:"Smith Corp",
            value:"$1,250",
            time:"2m ago",
            color:"text-green-600 font-bold",
        },
        {
            text:"Email sequence completed",
            subtext:"Johnson LLC",
            time:"15 m ago",
        },
        {
            text:"New import processed",
            subtext:"450 records",
            time:"1h ago",
        },
        {
            text:"Campaign started",
            subtext:"Anderson Inc",
            time:"2h ago",
        },
    ];

    return (
       <div className="bg-white border border-gray-200 rounded-2xl p-4">
        <h3 className="text-lg font-bold mb-4 ml-4 flex justify-between items-center">
            <span>Recent Activity</span>
            <a href="#" className="text-black-600 text-sm over:underline gap-1 ml-80">
                View All 
            </a>
        </h3>
        <div className="space-y-4">
            {activities.map((a,idx)=> (
                <div key={idx} className="flex justify-between items-start text-sm ">
                  <div>
                    <p className="font-semibold text-gray-900">{a.text}</p>
                    <p className="text-gray-500">{a.subtext}</p>
                  </div>
                  <div className="text-right">
                    {a.value ? <p className={`${a.color} text-sm`}>{a.value}</p>:null}
                    <p className="text-gray-500 text-xs">{a.time}</p>
                </div>
                </div>  
            ))}
        </div>
       </div> 
    );
}

export default RecentActivity;