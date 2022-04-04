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
        <div>
          <img
            src={Edit}
            style={{ width: "36px", height: "36px", padding: "15px 30px" }}
            alt=""
          />
        </div>
      </div>

      <div className="view-details">
        <div>
          <h3 className="space-info">Details</h3>
        </div>

        <div className="space-status">
          <div className="status-questions">
            <p>Price</p>
            <p>Frequency</p>
            <p>Duration</p>
            <p>Space Type</p>
            <p>Bed(s)</p>
            <p>Bath</p>
            <p>Furnished</p>
            <p>Ensuite</p>
            <p>Estate</p>
            <p>Status</p>
          </div>

          <div className="status-answers">
            <p>N50,000.00</p>
            <p>Monthly</p>
            <p>12 Months</p>
            <p>Apartment</p>
            <p>2</p>
            <p>2</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Vacant</p>
          </div>
        </div>
      </div>

      <divc className="space-features">
        <div>
          <h3 className="space-info" style={{ paddingTop: "40px" }}>
            Features
          </h3>
        </div>
      </divc>
    </div>
  );
};

export default SpaceDetailView;
