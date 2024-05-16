import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CardContext from "./contexts/CardContext";
import api from "./utils/api";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import InfoPopup from "./components/InfoPopup/InfoPopup";
import LoadMore from "./components/LoadMore/LoadMore";
function App() {
  const [cards, setCards] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [offset, setOffset] = useState(50);
  const [carga, setCarga] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);
  useEffect(() => {
    api.getPokemon(offset).then((res) => {
      setCards(res.results);
      setCarga(!carga);
    });
  }, [refreshPage]);

  function onClickLoadMore() {
    setOffset(offset + 50);
    setRefreshPage(!refreshPage);
  }

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const pokemonInfoArray = await Promise.all(
        cards.map((pokemon) => api.getInfoPokemon(pokemon.url))
      );
      setResult(pokemonInfoArray);
    };

    fetchPokemonInfo();
  }, [carga, cards]);

  function getAll() {
    api.getAllPokemon().then((res) => {
      const resultado = res.results.filter((pokemon) =>
        pokemon.name.includes(search.toLowerCase())
      );

      setCards(resultado);
      setCarga(!carga);
      setHide(!hide);
    });
  }

  function handleCardClick(card) {
    setIsInfoOpen(true);
    setSelectedCard(card);
    setHide(!hide);
  }
  function closeAllPopups() {
    setIsInfoOpen(false);
    setHide(!hide);
  }

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <CardContext.Provider value={result}>
        <Header />
        {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Navigation
          search={search}
          setSearch={setSearch}
          getAll={getAll}
          refreshPage={refreshPage}
          setRefreshPage={setRefreshPage}
          hide={hide}
          setHide={setHide}
        />
        <Main onCardClick={handleCardClick} />

        <InfoPopup
          selectedCard={selectedCard}
          isOpen={isInfoOpen ? "infoPopup_opened" : ""}
          valid={isInfoOpen ? true : false}
          onClose={closeAllPopups}
        />
        <LoadMore onClickLoadMore={onClickLoadMore} hide={hide} />
      </CardContext.Provider>
    </>
  );
}

export default App;
