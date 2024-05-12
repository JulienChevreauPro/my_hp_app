import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import "./HousesPage.css";

import CharacterCard from "../components/CharacterCard";
import ScrollToTop from "../components/ScrollToTop";

function HousesPage() {
  const characterList = useLoaderData();
  const [charactersByHouse, setCharactersByHouse] = useState([]);
  const [currentHouse, setCurrentHouse] = useState(null);
  const [clicked, setClicked] = useState(false);

  function handleHouse(house) {
    if (currentHouse === house) {
      setCharactersByHouse([]);
      setCurrentHouse(null);
      setClicked(!clicked);
    } else {
      const filteredCharacters = characterList.filter(
        (character) => character.house === house
      );
      setCharactersByHouse(filteredCharacters);
      setCurrentHouse(house);
      setClicked(!clicked);
    }
  }

  return (
    <>
      {!clicked && (
        <section className="houses--unClicked">
          <h2 className="houses__title--unClicked">Choose your house</h2>
          <article className="houses__Hufflepuff--unClicked">
            <img
              src="src/assets/images/HufflepuffLogo.jpg"
              alt="Hufflepuff Logo"
              className="houses__Hufflepuff-logo"
            />
            <button
              type="button"
              className="houses__Hufflepuff-button"
              name="Hufflepuff"
              onClick={() => handleHouse("Hufflepuff")}
            >
              Hufflepuff
            </button>
          </article>

          <article className="houses__Ravenclaw--unClicked">
            <img
              src="src/assets/images/RavenclawLogo.jpg"
              alt="Ravenclaw Logo"
              className="houses__Ravenclaw-logo"
            />
            <button
              type="button"
              className="houses__Ravenclaw-button"
              onClick={() => handleHouse("Ravenclaw")}
            >
              Ravenclaw
            </button>
          </article>
          <article className="houses__Slytherin--unClicked">
            <img
              src="src/assets/images/SlytherinLogo.jpg"
              alt="Slytherin Logo"
              className="houses__Slytherin-logo"
            />
            <button
              type="button"
              className="houses__Slytherin-button"
              onClick={() => handleHouse("Slytherin")}
            >
              Slytherin
            </button>
          </article>
          <article className="houses__Gryffindor--unClicked">
            <img
              src="src/assets/images/GryffindorLogo.jpg"
              alt="Gryffindor Logo"
              className="houses__Gryffindor-logo"
            />
            <button
              type="button"
              className="houses__Gryffindor-button"
              onClick={() => handleHouse("Gryffindor")}
            >
              Gryffindor
            </button>
          </article>
        </section>
      )}
      ;
      {clicked && (
        <section className="houses--clicked">
          <article className={`houses__${currentHouse}--clicked`}>
            <img
              src={`src/assets/images/${currentHouse}Logo.jpg`}
              alt={`${currentHouse} Logo`}
              className={`houses__${currentHouse}-logo`}
            />
            <button
              type="button"
              className={`houses__${currentHouse}-button`}
              onClick={() => handleHouse(`${currentHouse}`)}
            >
              Return
            </button>
          </article>
          <article className="houses__cards--clicked">
            {charactersByHouse.map((character) => (
              <CharacterCard key={character.id} characters={character} />  
            ))}
            <ScrollToTop />
          </article>
        </section>
      )}
    </>
  );
}

export default HousesPage;
