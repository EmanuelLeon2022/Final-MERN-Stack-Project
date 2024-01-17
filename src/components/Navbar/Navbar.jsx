import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import * as userService from '../../utilities/users-service'
function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
    <div className="navi">
      <nav style={{justifyContent: "space-evenly", display: "flex"}}>
      <Link className="" to="/" style={{padding:"15px" }}><h3>Home</h3></Link>
      <Link to="https://epic-turbo-thunder-snail-racers.onrender.com/" target="_blank" style={{padding:"15px"}}><h3>Snail Race</h3></Link>
      <Link to="/zelda" style={{padding:"15px"}}><h3>Zelda</h3></Link>
      <Link to="/inventory"style={{padding:"15px"}}><h3>Inventory</h3></Link>
      <Link to="/materials"style={{padding:"15px"}}><h3>Materials</h3></Link>
      <Link to="/about" style={{padding:"15px"}}><h3>About</h3></Link>
      <Link to="" style={{padding:"15px"}} onClick={handleLogOut}><h3>Log Out</h3></Link>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
