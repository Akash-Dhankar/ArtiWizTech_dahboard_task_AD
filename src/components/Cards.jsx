import React from "react";
function Cards() {
    const cards = [
        {
            title:"Total Outstanding",
            value:"$2,345,678",
            change:"\u2191 12.5% from last month",
            changeColor: "text-green-600",
        },
        {
            title:"Active Campaigns",
            value:"24",
            change:"\u2191 3 from last month",
            changeColor:"text-green-600",
        },
        {
            title:"Collections Rate",
            value:"68%",
            change:"\u2191 5.2% from last month",
            changeColor:"text-green-600",
        },
        {
            title:"Avg. Days to Pay",
            value:"12.3",
            change:"\u2191 2.1 from last month",
            changeColor:"text-red-600",
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {cards.map((card,idx)=>(
                <div key={idx}
                    className="bg-white rounded-xl p-4 border border-gray-200">
                        <p className="text-sm font-bold ">{card.title}</p>
                        <h2 className="text-xl font-bold mt-8">{card.value}</h2>
                        <p className={`${card.changeColor} text-sm`}>{card.change}</p>
                    </div>
            ))}
        </div>
    );
}

export default Cards;