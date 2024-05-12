import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <img
        src="src/assets/images/Logo_HP.png"
        alt="Logo Harry Potter"
        className="navbar__logo"
      />
      <nav className="navbar__menu">
        <Link to="/" className="navbar__item">
          Home
        </Link>
        <Link to="/characters" className="navbar__item">
          Characters
        </Link>
        <Link to="/houses" className="navbar__item">
          Houses
        </Link>
        <Link to="/spells" className="navbar__item">
          Spells
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
