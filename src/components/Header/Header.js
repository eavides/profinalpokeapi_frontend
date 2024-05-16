import logo from "../../images/pokemon-logo.webp";
import logoright from "../../images/pokelogo.png";
import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img alt="Page Logo" className="header__logo" src={logo} />
      <img alt="Page Logo" className="header__right" src={logoright} />
      {/* <hr className="header__line" /> */}
    </header>
  );
}

export default Header;
