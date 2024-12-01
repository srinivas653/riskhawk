import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatPanel from "./components/ChatPanel";
import CustomerDetails from "./components/CustomerDetails";
import ActionLauncher from "./components/ActionLauncher";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <CustomerDetails />
          <ChatPanel />
          <ActionLauncher />
        </div>
      </div>
    </div>
  );
}

export default App;
