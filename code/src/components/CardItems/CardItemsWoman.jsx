import React from 'react'
import{clotheswoman} from '../../data/clothesman.js'
import "../../styles/block/_card.scss";

const CardItemsMan = () => {
  return (
    <div className="container__card">
            {clotheswoman.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt="clothes" className="card__image" />
                    <div className="card__info">
                        <h3 className="card__title">{item.name}</h3>
                        <p className="card__price">${item.price}</p>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default CardItemsMan