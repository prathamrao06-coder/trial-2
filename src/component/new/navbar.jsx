import React from "react";
import {Link} from "react-router-dom";


export default function navbar() {
  return (
    <div>
     
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
