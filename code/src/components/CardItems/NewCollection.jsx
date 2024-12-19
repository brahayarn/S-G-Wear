import React from "react";
import { clothesnew } from "../../data/new.js";
import "../../styles/block/_card.scss";
import { Link } from 'react-router-dom';

const NewCollection = () => {
  return (
    <div className="container__card">
      {clothesnew.map((item, index) => (
        <div className="card" key={index}>
          <Link to={`/new-collection/${item.id}`}>
            <img src={item.image} alt={item.name} className="card__image" />
          </Link>
          <div className="card__info">
            <h3 className="card__title">{item.name}</h3>
            <p className="card__price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCollection;
