import React from "react";
import "../../styles/block/_discount.scss";

const Discount = () => {
  return (
    <div>
      
      <div className="discount__section">
        <div className="top__section">
          <p className="top__section-text">explore more</p>
          <span class="button__arrow"></span>
        </div>
      </div>

      <div className="bottom__section">
        <div className="bottom__section-up">
          <p className="bottom__section-left-up">%</p>
          <p className="bottom__section-left-text">25</p>
          <p className="bottom__section-left-new">new collection</p>
          <span className="bottom__section-left-off">off</span>
        </div>

        <div className="bottom__section-down">
          <p className="bottom__section-right-plus">+</p>
        </div>

      </div>
    </div>
  );
};

export default Discount;
