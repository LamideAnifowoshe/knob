import React from "react";
import "./MySpace.css";
import myspace from "./images/myspace.png";
import Toggle from "./images/Toggle.png";

const MySpace = () => {
  return (
    <div className="col-2">
      <div className="myspace">
        <img className="space" src={myspace} alt="" />

        <h5 style={{ display: "inline" }}>
          The Space <strong>.</strong> Lekki, Lagos.
        </h5>
        <img src={Toggle} alt="" />
        <ul className="list">
          <li className="li1">Apartment</li>
          <li>Estate</li>
          <li>Furnished</li>
          <li>Ensuite</li>
          <li>2 Bed</li>
          <li>2 Bath</li>
        </ul>
        <h4>
          N50,0000<small>/month for 12 months</small>
        </h4>
      </div>
    </div>
  );
};

export default MySpace;
