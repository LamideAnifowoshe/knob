import React from "react";
import "./MySpace.css";
import myspace from "./images/myspace.png";
import Toggle from "./images/Toggle.png";

const MySpace = () => {
  return (
    <div className="col-2">
      <div className="myspace">
        <div className="my-space-head">
          <img
            src={myspace}
            style={{
              width: "271px",
              height: "82px",
              borderRadius: "8px 8px 4px 4px",
            }}
            alt=""
          />
          <div className="details">
            <div>
              <h5>
                The Space <strong>.</strong> Lekki, Lagos.
              </h5>
            </div>

            <div>
              <img
                src={Toggle}
                alt=""
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            </div>
          </div>
          <div className="list">
            <ul>
              <li className="li1">Apartment</li>
              <li>Estate</li>
              <li>Furnished</li>
              <li>Ensuite</li>
              <li>2 Bed</li>
              <li>2 Bath</li>
            </ul>
          </div>
        </div>

        <div className="carddetail">
          <div>
            <h4>
              N50,0000<small>/month for 12 months</small>
            </h4>
          </div>
          <div>
            <h6>Vacant</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySpace;
