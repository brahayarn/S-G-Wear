import React from "react";
import "../../styles/block/_sectionitem.scss";
import vector from "../../assets/icons/vector.svg";

const SectionItem = ({ selectedTitle, isAboutActive, className }) => {
  const isMobile = window.innerWidth <= 960;

  return (
    <section className={`section ${isAboutActive ? "section--about" : ""} ${className}`}>
        <div className="section__item">
          <h1
            className={`section__title ${isAboutActive ? "section__title--about" : ""}`}
          >
            {/* Для мобільних пристроїв */}
            {isMobile && isAboutActive ? (
              <>
                {/* Текст для About на мобільних */}
                This is our marketing
                <br />
                <span className="section__line">
                  <img src={vector} alt="vector" className="section__vector" />
                  message.
                </span>
              </>
            ) : (
              // Якщо не "About" або не мобільний, відображаємо вибраний текст або інший
              <span className="mobile-text">
                {selectedTitle}
              </span>
            )}

            {/* Для десктопу */}
            {!isMobile && (
              <span className="desktop-text">
                {isAboutActive ? (
                  <>
                    Unleash your style – where fashion meets
                    <br />
                    <span className="section__line">
                      <img src={vector} alt="vector" className="section__vector" />
                      your true self!
                    </span>
                  </>
                ) : (
                  selectedTitle
                )}
              </span>
            )}
          </h1>
        </div>
    </section>
  );
};

export default SectionItem;
