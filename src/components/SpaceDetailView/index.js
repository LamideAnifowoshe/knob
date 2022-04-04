import React from "react";
import Edit from "./images/Edit.png";
import Features1 from "./images/Features1.png";
import Features2 from "./images/Features2.png";
import Features3 from "./images/Features3.png";
import Features4 from "./images/Features4.png";
import Features5 from "./images/Features5.png";
import Features6 from "./images/Features6.png";
import Features7 from "./images/Features7.png";
import Features8 from "./images/Features8.png";
import Features9 from "./images/Features9.png";
import myspace from "./images/myspace.png";
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

      <div className="space-features">
        <div>
          <h3 className="space-info" style={{ paddingTop: "40px" }}>
            Features
          </h3>
          <div className="Feat">
            <div className="features">
              <h5>Amenities</h5>
            </div>
            <div className="services">
              <ul>
                <li>
                  <img src={Features8} alt="" /> Parking Space
                </li>
                <li>
                  <img src={Features1} alt="" /> Elevator
                </li>
                <li>
                  <img src={Features9} alt="" /> Internet Access
                </li>
              </ul>
            </div>
          </div>

          <div className="Feat">
            <div className="features">
              <h5>Nearby Public Services</h5>
            </div>
            <div className="services">
              <ul>
                <li>
                  <img src={Features2} alt="" /> Cinemas
                </li>
                <li>
                  <img src={Features3} alt="" /> Shopping Malls
                </li>
                <li>
                  <img src={Features4} alt="" /> SuperMarkets
                </li>
              </ul>
            </div>
          </div>

          <div className="Feat">
            <div className="features">
              <h5>Perks</h5>
            </div>
            <div className="services">
              <ul>
                <li>
                  <img src={Features5} alt="" /> Good Ratings & Reviews
                </li>
                <li>
                  <img src={Features6} alt="" /> Quiet Neighborhood
                </li>
                <li>
                  <img src={Features7} alt="" /> Easy to Navigate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailView;
