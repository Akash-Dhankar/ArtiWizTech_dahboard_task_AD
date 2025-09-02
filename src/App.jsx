import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
         <Header />

         <main className="p-6 space-y-6">
          <Cards />
         </main>
      </div>
    </div>
  );
}

export default App;