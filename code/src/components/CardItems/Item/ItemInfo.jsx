import React from "react";
import { useParams } from "react-router-dom";
import { clothesnew } from "../../../data/new.js";
import { clothesman } from "../../../data/clothesman.js";
import { clotheswoman } from "../../../data/clotheswoman.js";
import "../../../styles/block/_item.scss";

const ItemInfo = () => {
  const { id } = useParams();
  const item = [...clothesnew, ...clothesman, ...clotheswoman].find(
    (item) => item.id === parseInt(id)
  );

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <>
      <div className="section">
        <div className="section__item">
          <h1 className="section__title">
            <span className="section__name">{item.name}</span>
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="container__item">
          <div className="item__images">
            <div className="item__image-small">
              {item.cards && item.cards.length > 0 ? (
                item.cards.map((card, index) => (
                  <img
                    key={index}
                    src={card.image}
                    alt={`Additional image ${index + 1}`}
                    className="item__image-sm"
                  />
                ))
              ) : (
                <div className="item__placeholder"></div>
              )}
            </div>
            <div className="item__image-main">
              <img src={item.image} alt={item.name} className="item__image-m" />
            </div>
          </div>
          <div className="item__info">
            <p className="item__description">{item.description}</p>
            <div className="item__size">
              <p className="item__size-title">Sizes available:</p>
              <div className="flex">
                {item.sizes && item.sizes.length > 0 ? (
                  item.sizes.map((size, index) => (
                    <div className="item__size-container">
                      <span key={index} className="item__size-text">
                        {size}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No sizes available.</p>
                )}
              </div>
            </div>
            <div className="item__color">
              <p className="item__color-title">Colors available:</p>
              <div className="flex">
                {item.colors && item.colors.length > 0 ? (
                  item.colors.map((color, index) => (
                    <span
                      key={index}
                      className="item__color-circle"
                      style={{
                        backgroundColor: getComputedStyle(
                          document.documentElement
                        ).getPropertyValue(`--${color.toLowerCase()}`),
                      }}
                    ></span>
                  ))
                ) : (
                  <p>No colors available.</p>
                )}
              </div>
            </div>

            <div className="item__price">
              <p className="item__price-title">Price:</p>
              <span className="item__price-text">${item.price}</span>
            </div>
            <div className="item__button">
              <button className="item__button-add">add to shopping cart</button>
              <button className="item__button-fav">add to favourites</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInfo;
