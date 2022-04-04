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
          <h3 id="details">Details</h3>
        </div>

        <div classNmme="space-status">
          <div>
            <ul className="status-questions">
              <li>Price</li>
              <li>Frequency</li>
              <li>Duration</li>
              <li>Space Type</li>
              <li>Bed(s)</li>
              <li>Bath</li>
              <li>Furnished</li>
              <li>Ensuite</li>
              <li>Estate</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <ul className="status-ansswers">
              <li>N50,000.00</li>
              <li>Monthly</li>
              <li>12 Months</li>
              <li>Apartment</li>
              <li>2</li>
              <li>2</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Vacant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailView;
