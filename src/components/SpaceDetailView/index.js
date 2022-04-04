import React from "react";
import Edit from "./images/Edit.png";
import "./SpaceDetailView.css";

const SpaceDetailView = () => {
  return (
    <div className="thespace">
      <div className="header">
        <div>
          <h3 className="the-space">The Space</h3>
          <h5 className="addy">42, Bajulaiye street, Surulere, Lagos.</h5>
        </div>
      </div>
      <div>
        <img src={Edit} style={{ width: "36px", height: "36px" }} alt="" />
      </div>
    </div>
  );
};

export default SpaceDetailView;
