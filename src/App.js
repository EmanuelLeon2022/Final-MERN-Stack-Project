import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import Home from "./pages/Home/Home.jsx";
import Zelda from "./pages/Zelda/Zelda.jsx";
import Materials from './pages/Materials/Materials.jsx'
import Inventory from "./pages/Inventory/Inventory.jsx";
import Me from "./pages/Me/Me.jsx";
import Retro from './pages/Me/Retro.jsx'
import Navbar from "./components/Navbar/Navbar.jsx";


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
            <Route path="/zelda" element={<Zelda user={user} setUser={setUser} />} />
            <Route path="/materials" element={<Materials user={user} setUser={setUser}/>}/>
            <Route path="/items" element={<Inventory user={user} setUser={setUser}/>}/>
            <Route path="/me" element={<Me user={user} setUser={setUser}/>}/>
            <Route path="/me/but/cooler/I/dunno/what/do/you/think" element={<Retro user={user} setUser={setUser}/>}/>
          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </div>
  );
}

export default App;
