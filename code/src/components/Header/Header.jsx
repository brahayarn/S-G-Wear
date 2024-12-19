import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const menuItems = [
    { name: "Man", path: "/man" },
    { name: "Woman", path: "/woman" },
    { name: "About", path: "/" },
    { name: "New Collection", path: "/new-collection" },
    { name: "Your Cart", path: "/cart" },
    { name: "Your Favourites", path: "/favourites" },
  ];

  const handleActive = (index) => {
    setActive(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = menuItems.findIndex((item) => item.path === currentPath);
    setActive(activeIndex !== -1 ? activeIndex : null);
  }, [location, menuItems]);

  const shouldShowSectionItem = !/^\/new-collection\/\d+$/.test(location.pathname);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div
            className={`header__top-row ${isMobileMenuOpen ? "header__top-row--mobile" : ""}`}
          >
            <Link to="/">
              <img className="header_logo" src={logo} alt="logo" />
            </Link>

            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  {menuItems.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`nav__link ${active === index ? "active" : ""}`}
                        onClick={() => {
                          handleActive(index);
                          if (isMobileMenuOpen) toggleMobileMenu();
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="header__icons">
              <Link
                to="/cart"
                className={`header__icon-link ${active === 4 ? "active" : ""}`}
                onClick={() => {
                  handleActive(4);
                  if (isMobileMenuOpen) toggleMobileMenu();
                }}
              >
                <img
                  className="header_icon"
                  src={active === 4 ? shopping_cart_active : shopping_cart}
                  alt="cart"
                />
              </Link>
              <Link
                to="/favourites"
                className={`header__icon-link ${active === 5 ? "active" : ""}`}
                onClick={() => {
                  handleActive(5);
                  if (isMobileMenuOpen) toggleMobileMenu();
                }}
              >
                <img
                  className="header_icon"
                  src={active === 5 ? like_active : like}
                  alt="like"
                />
              </Link>
            </div>

            <div className="header__nav-btn">
              <button
                className="nav-icon-btn"
                onClick={toggleMobileMenu}
              >
                <div
                  className={`nav-icon ${isMobileMenuOpen ? "nav-icon--active" : ""}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {shouldShowSectionItem && (
        <SectionItem
          selectedTitle={menuItems[active] ? menuItems[active].name : ""}
          isAboutActive={active === 2}
          className={isMobileMenuOpen ? "menu-open" : ""}
        />
      )}
    </header>
  );
};

export default Header;
