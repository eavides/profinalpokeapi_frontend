// import React from "react";
// import menuicon from "../../images/Dropdowndrop.svg";
// import list from "../../images/list.svg";
// import inicio from "../../images/Homeicono.svg";
// import close from "../../images/Crossx.svg";
// import acerca from "../../images/Help.svg";

// function Menu({ menuOpen, setMenuOpen }) {
//   console.log(menuOpen);
//   function toggleMenu() {
//     setMenuOpen(!menuOpen);
//   }
//   return (
//     <nav className="menu">
//       <ul className="menu__option">
//         <li className={`menu-toggle ${menuOpen ? "open" : ""}`}>
//           <a className="menu__refe" href="#" onClick={toggleMenu}>
//             <img
//               alt="Menu"
//               className="menu__inicio"
//               src={menuOpen ? close : menuicon}
//             />
//           </a>
//         </li>
//         <li className={`menu__close ${menuOpen ? "menu-toggle__open" : ""}`}>
//           <a href="#">Inicio</a>
//         </li>
//         <li className={`menu__close ${menuOpen ? "menu-toggle__open" : ""}`}>
//           <a href="#">Acerca de</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Menu;

import React from "react";
import menuicon from "../../images/list.svg";
import list from "../../images/list.svg";
import inicio from "../../images/Homeicono.svg";
import close from "../../images/Crossx.svg";
import acerca from "../../images/Help.svg";

function Menu({ menuOpen, setMenuOpen }) {
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className={`menu ${menuOpen ? "menu__open" : ""}`}>
      <ul className="menu__options">
        <li className="menu-toggle">
          <a className="menu__ref" href="#" onClick={toggleMenu}>
            <img
              alt="Menu"
              className="menu__icon"
              src={menuOpen ? close : menuicon}
            />
          </a>
        </li>
        <li
          className={`menu__option ${menuOpen ? "menu__open" : "menu__close"}`}
        >
          <a href="#">Inicio</a>
        </li>
        <li
          className={`menu__option ${menuOpen ? "menu__open" : "menu__close"}`}
        >
          <a href="#">Acerca de</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
