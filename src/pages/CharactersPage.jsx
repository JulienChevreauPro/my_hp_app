import { useLoaderData } from "react-router-dom";

import "./CharactersPage.css";

import CharacterCard from "../components/CharacterCard";

function CharactersPage() {
  const characterList = useLoaderData();

  return (
    <main className="charactersPage">
      <h2 className="charactersPage__title">
        Discover all the characters of the saga
      </h2>
      {characterList.map((character) => (
        <CharacterCard key={character.id} characters={character} />
      ))}
    </main>
  );
}

export default CharactersPage;
