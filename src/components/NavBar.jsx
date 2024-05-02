import { Link } from "react-router-dom";

import "./NavBar.css"

function NavBar() {

    return (
        <nav>
            <Link to= "/">Home</Link>
            <Link to= "/characters">Characters</Link>
            <Link to= "/houses">Houses</Link>
            <Link to= "/spells">Spells</Link>
        </nav>
    )
}

export default NavBar;