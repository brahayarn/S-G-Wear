import React, { useState } from "react";
import "../../styles/block/_header.scss";
import logo from "../../assets/logo.svg";
import like from "../../assets/icons/like.svg";
import shopping_cart from "../../assets/icons/shopping-cart.svg";
import SectionItem from "./SectionItem";
import like_active from "../../assets/icons/like_active.svg";
import shopping_cart_active from "../../assets/icons/shopping-cart_active.svg";

const Header = () => {
  const [active, setActive] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const menuItems = [
    "Man",
    "Woman",
    "About",
    "New collection",
    "Cart",
    "Likes",
  ]; 

  const handleActive = (index) => {
    setActive(index); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); 
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div
            className={`header__top-row ${
              isMobileMenuOpen ? "header__top-row--mobile" : ""
            }`}
          >
            {/* Лого */}
            <a href="#!">
              <img className="header_logo" src={logo} alt="logo" />
            </a>

            {/* Навігація */}
            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  {menuItems.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <a
                        href="#!"
                        className={`nav__link ${
                          active === index ? "active" : ""
                        }`}
                        onClick={() => {
                          handleActive(index);
                          if (isMobileMenuOpen) toggleMobileMenu(); 
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Іконки */}
            <div className="header__icons">
              <a
                href="#!"
                onClick={() => handleActive(4)} 
                className={`header__icon-link ${active === 4 ? "active" : ""}`}
              >
                <img
                  className="header_icon"
                  src={active === 4 ? shopping_cart_active : shopping_cart}
                  alt="cart"
                />
              </a>
              <a
                href="#!"
                onClick={() => handleActive(5)} 
                className={`header__icon-link ${active === 5 ? "active" : ""}`}
              >
                <img
                  className="header_icon"
                  src={active === 5 ? like_active : like}
                  alt="like"
                />
              </a>
            </div>

            {/* Кнопка для мобільного меню */}
            <div className="header__nav-btn">
              <button
                className="nav-icon-btn"
                onClick={toggleMobileMenu} 
              >
                <div
                  className={`nav-icon ${
                    isMobileMenuOpen ? "nav-icon--active" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Передача активного елемента */}
      <SectionItem
        isAboutActive={active === 2}
        selectedTitle={menuItems[active] || "Welcome!"}
      />
    </header>
  );
};

export default Header;
