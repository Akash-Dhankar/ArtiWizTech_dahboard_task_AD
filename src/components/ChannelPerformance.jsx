import React from "react";
import {FaEnvelope, FaSms, FaPhone} from "react-icons/fa";

function ChannelPerformance() {
    const channels = [
        {
            icon:<FaEnvelope className="text-white" size={16}/>,
            bg:"bg-blue-500",
            label:"Email",
            sent:"(1250 sent)",
            rate:"18.7%",
        },
        {
            icon:<FaSms className="text-white" size={16}/>,
            bg:"bg-green-500",
            label:"SMS",
            sent:"(680 sent)",
            rate:"22.9%",
        },
        {
            icon:<FaPhone className="text-white" size={16}/>,
            bg:"bg-purple-500",
            label:"Voice",
            sent:"(320 sent)",
            rate:"27.8%",
        }
    ];

    return (
       <div className="bg-white border border-gray-200 rounded-2xl p-4">
        <h3 className="text-sm mb-4">Channel Performance</h3>
        <div className="space-y-4">
            {channels.map((ch,idx)=>(
                <div key={idx} className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${ch.bg}`}>
                          {ch.icon}
                        </div>
                        <div>
                            <p className="font-semibold">{ch.label}</p>
                            <p className="text-xs text-gray-500">{ch.sent}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">{ch.rate}</p>
                        <p className="text-xs text-gray-500">response rate</p>
                    </div> 
                </div>
            ))}
        </div>
       </div>
    );
}

export default ChannelPerformance;