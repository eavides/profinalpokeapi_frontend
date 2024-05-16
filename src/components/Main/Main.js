import React from "react";
import CardPokemon from "../Cards/Card";
import CardContext from "../../contexts/CardContext";

function Main({ onCardClick }) {
  const cardContext = React.useContext(CardContext);
  return (
    <main className="container">
      <section className="grid">
        <div className="grid__container">
          {cardContext?.map((item) => {
            // console.log(item);
            return (
              <CardPokemon
                card={item}
                key={item.id}
                handleCardClick={onCardClick}
              ></CardPokemon>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
