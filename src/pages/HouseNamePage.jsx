import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CharacterCard from "../components/CharacterCard";
import ScrollToTop from "../components/ScrollToTop";
// import "./HouseNamePage.css";

function HouseNamePage() {
  const { houseName } = useParams();
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      });
  }, [houseName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="houses--clicked">
      <article className={`houses__${houseName}--clicked`}>
        <img
          src={`src/assets/images/${houseName}Logo.jpg`}
          alt={`${houseName} Logo`}
          className={`houses__${houseName}-logo`}
        />
        <button type="button" className={`houses__${houseName}-button`}>
          Return
        </button>
      </article>
      <article className="houses__cards--clicked">
        {characters.map((character) => (
          <CharacterCard key={character.id} characters={character} />
        ))}
        <ScrollToTop />
      </article>
    </section>
  );
}

export default HouseNamePage;
