import React from "react";
import "../../styles/block/_info.scss";
import Discount from "./Discount";
import man from "../../assets/home/man.svg";
import woman from "../../assets/home/woman.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="card__section-top">
        <div className="card__section-left">
          <div className="card__section-left-number">
            <p className="card__section-left-number-text">01</p>
          </div>
          <div class="card__section-left__new">
            <p className="card__section-left__new-text">new collection</p>
          </div>
        </div>
        <div className="card__section-center">
          <Discount />
        </div>
        <div className="card__section-right">
          <p className="card__section-right__text-title">#2024</p>
        </div>
      </div>
      <div className="card__section-bottom">
        <div className="card__section-bottom__left">
          <img src={man} alt="Man" />
        </div>
          <p className="card__section-bottom__left-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="card__section-bottom__right-text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        <div className="card__section-bottom__right">
          <img src={woman} alt="Woman" />
        </div>
      </div>
    </div>
  );
};

export default Card;
