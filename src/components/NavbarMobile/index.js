import React from "react";
import "./Mobile.css";
import Dashboard from "./Images/Dashboard.png";
import Home from "./Images/Home.png";
import Saved from "./Images/Saved.png";
import Payment from "./Images/Payment.png";
import Comment from "./Images/Comment.png";

const NavbarMobile = () => {
  return (
    <div className="nav">
      <div className="ul">
        <a href="./">
          <img src={Home} alt="" />
          <p>Home</p>
        </a>

        <a href="./">
          <img src={Payment} alt="" />
          <p>Wallet</p>
        </a>

        <a href="./">
          <img src={Dashboard} alt="" />
          <p>Dashboard</p>
        </a>

        <a href="./">
          <img src={Saved} alt="" />
          <p>Requests</p>
        </a>

        <a href="./">
          <img src={Comment} alt="" />
          <p>Messages</p>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobile;
