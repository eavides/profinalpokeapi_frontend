import React from "react";
import foto from "../../images/pokemon-logo.webp";

function Card({ card, handleCardClick }) {
  function handleClick() {
    return handleCardClick(card);
  }
  return (
    <>
      <div className="grid__card">
        <img
          className="grid__card-image"
          src={card.sprites.other.dream_world.front_default}
          alt="Imagen de carta"
          onClick={handleClick}
        />
        <div className="grid__card-description">
          <p className="grid__card-title">Pokemon Número {card.id} </p>
        </div>
        <div className="grid__card-group">
          <h2 className="grid__card-name">{card.name} </h2>
          <div className="card__types">
            {card.types.map((type, index) => (
              <span key={index} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="card__labels">
            {card.types.map((type, index) => (
              <span key={index} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
