import React from 'react'
import{clothesman} from '../../data/clothesman.js'
import "../../styles/block/_card.scss";
import { Link } from 'react-router-dom';

const CardItemsMan = () => {
  return (
    <div className="container__card">
      {clothesman.map((item, index) => (
        <div className="card" key={index}>
          {/* Передаємо item.id для маршруту */}
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
}

export default CardItemsMan