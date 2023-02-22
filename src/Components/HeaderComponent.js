import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="logo-div">
        <img className="logo-img" src="./logo-img.png" alt="" />

        <h1 className="logo-text">Food HUB</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
}

export default HeaderComponent;
