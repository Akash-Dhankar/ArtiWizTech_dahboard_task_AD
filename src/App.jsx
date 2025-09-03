import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import ChannelPerformance from "./components/ChannelPerformance";
import RecentActivity from "./components/RecentActivity";
import QuickActions from "./components/QuickActions";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar/>

      <div className="flex-1 flex flex-col">
         <Header/>

         <main className="p-6 space-y-6">
          <Cards/>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChannelPerformance/>
            <RecentActivity/>
          </div>
          <QuickActions/>
         </main>
      </div>
    </div>
  );
}

export default App;