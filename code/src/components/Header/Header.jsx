import React, { useState } from "react";
import "../../styles/block/_header.scss";
import logo from "../../assets/logo.svg";
import like from "../../assets/icons/like.svg";
import shopping_cart from "../../assets/icons/shopping-cart.svg";

const Header = () => {
  const [active, setActive] = useState(null); // Зберігає вибраний пункт меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Стан для відкриття/закриття мобільного меню

  const handleActive = (index) => {
    setActive(index); // Встановлює активний пункт
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Перемикає стан мобільного меню
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
                  {["Man", "Woman", "About", "New collection"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#!"
                          className={`nav__link ${
                            active === index ? "active" : ""
                          }`}
                          onClick={() => {
                            handleActive(index);
                            if (isMobileMenuOpen) toggleMobileMenu(); // Закриває мобільне меню після вибору
                          }}
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* Іконки */}
            <div className="header__icons">
              <a href="#!">
                <img className="header_icon" src={shopping_cart} alt="cart" />
              </a>
              <a href="#!">
                <img className="header_icon" src={like} alt="like" />
              </a>
            </div>

            {/* Кнопка для мобільного меню */}
            <div className="header__nav-btn">
              <button
                className="nav-icon-btn"
                onClick={toggleMobileMenu} // Відкриває/закриває меню
              >
                <div
                  className={`nav-icon ${isMobileMenuOpen ? "nav-icon--active" : ""}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
