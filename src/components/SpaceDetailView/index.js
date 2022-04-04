import React from "react";
import Edit from "./images/Edit.png";
import "./SpaceDetailView.css";

const SpaceDetailView = () => {
  return (
    <div className="thespace">
      <div className="header">
        <h2 className="">The Space</h2>
        <img src={Edit} alt="" />
        <h5>42, Bajulaiye street, Surulere, Lagos.</h5>
      </div>
    </div>
  );
};

export default SpaceDetailView;
