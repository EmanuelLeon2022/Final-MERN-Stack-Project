import React from "react";
import { Link } from "react-router-dom";

function Navbar({user}) {
  return (
    <>
      <nav style={{ justifyContent: "space-evenly", display: "flex" }}>

      <div style={{justifyContent:'space-around'}}>
        <p style={{margin:'1em;'}}>Welcome {user.name}, </p><hr/>
        <p style={{margin:'1em;'}}> Logged In : {user.email}</p>
      </div>

        <Link to="/orders">Order History</Link>

        <Link to="/orders/new">New Order</Link>
      </nav>
    </>
  );
}

export default Navbar;
