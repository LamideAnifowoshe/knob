import React from "react";
import "./Navbar.css";
import Dashboard from "./Images/Dashboard.png";
import Home from "./Images/Home.png";
import Saved from "./Images/Saved.png";
import Payment from "./Images/Payment.png";
import Comment from "./Images/Comment.png";
import Settings from "./Images/Settings.png";
import Subtract from "./Images/Subtract.png";

const Navbar = () => {
  return (
    <nav className="navbar-web">
      <img className="logo" src={Subtract} alt="" />
      <ol className="navbar-list">
        <li>
          <a href="./">
            <img src={Dashboard} alt="" />
          </a>
        </li>

        <li>
          <a href="./">
            <img src={Home} alt="" />
          </a>
        </li>

        <li>
          <a href="./">
            <img src={Saved} alt="" />
          </a>
        </li>

        <li>
          <a href="./">
            <img src={Payment} alt="" />
          </a>
        </li>

        <li>
          <a href="./">
            <img src={Comment} alt="" />
          </a>
        </li>

        <li>
          <a href="./">
            <img src={Settings} alt="" />
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
