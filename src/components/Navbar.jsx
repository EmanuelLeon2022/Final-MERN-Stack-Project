import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav style={{ justifyContent: "space-evenly", display: "flex" }}>
        <Link to="/orders">Order History</Link>

        <Link to="/orders/new">New Order</Link>
      </nav>
    </>
  );
}

export default Navbar;
