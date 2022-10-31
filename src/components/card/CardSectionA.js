import React from "react";
import "./CardSectionA.css";
const CardSectionA = (props) => {
  return (
    <div>
      <div class="card border-0 text-white pe-3">
        <img src={props.img} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <p className="card-header border-0">Collection</p>
          <div class="card-body">
            <h5>{props.cardTittle}</h5>
          </div>
          <div class="card-footer border-0 ">
            <a href={props.btnTo} className="btn btn-light text-black">
              Show all
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSectionA;
