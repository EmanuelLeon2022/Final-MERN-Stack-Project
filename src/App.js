import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "./components/NewOrderPage";
import AuthPage from "./components/AuthPage";
import OrderHistoryPage from "./components/OrderHistoryPage";
import Navbar from "./components/Navbar";


function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
