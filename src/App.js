import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import * as stocksAPI from './utilities/stocks-api.js'
import * as itemsAPI from './utilities/items-api.js'
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import Home from "./pages/Home/Home.jsx";
import Zelda from "./pages/Zelda/Zelda.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import Material from "./pages/Materials/Material.jsx";
import Me from "./pages/Me/Me.jsx";
import Retro from './pages/Me/Retro.jsx'
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [user, setUser] = useState(getUser());
  // Abdul heldped me get this section setup
  const [stocks, setStocks] = useState(stocksAPI.getAll());
  useEffect( ()=>{
    async function fetchData(){
      try {
        const data = await stocksAPI.getAll();
        setStocks(data)
        console.log(data)
      } catch(e){
        console.log("didn't fetch the items", e.message)
      }
    }
    fetchData();
  },[])
  const [items, setItems] = useState();
  useEffect( ()=>{
    async function fetchData(){
      try {
        const data = await itemsAPI.getAll();
        setItems(data)
        console.log(data)
      } catch(e){
        console.log("didn't fetch the items", e.message)
      }
    }
    fetchData();
  },[])
  // End
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
            <Route path="/zelda" element={<Zelda user={user} setUser={setUser} />} />
            <Route path="/supplies" element={<Inventory user={user} setUser={setUser} stocks={stocks}/>}/>
            <Route path="/tools" element={<Material user={user} setUser={setUser} items={items}/>}/>
            <Route path="/me" element={<Me user={user} setUser={setUser}/>}/>
            <Route path="/me/cooler" element={<Retro user={user} setUser={setUser}/>}/>
          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </div>
  );
}

export default App;
