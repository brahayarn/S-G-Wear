import React from "react";
import "../../styles/block/_sectionitem.scss";
import vector from "../../assets/icons/vector.svg";

const SectionItem = ({ isAboutActive }) => {
  return (
    <section className={`section ${isAboutActive ? "section--about" : ""}`}>
      <div className="container">
        <div className="section__item">
          <h1
            className={`section__title ${
              isAboutActive ? "section__title--about" : ""
            }`}
          >
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
              "text!"
            )}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionItem;
