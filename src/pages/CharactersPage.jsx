import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./CharactersPage.css";

import CharacterCard from "../components/CharacterCard";

function CharactersPage() {
  const characterList = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharacters = characterList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(characterList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="charactersPage">
      <h2 className="charactersPage__title">
        Discover all the characters of the saga
      </h2>
      {currentCharacters.map((character) => (
        <CharacterCard key={character.id} characters={character} />
      ))}
      <section className="charactersPage__pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="charactersPage__buttonPrev"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className="charactersPage__button"
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="charactersPage__buttonNext"
        >
          Next
        </button>
      </section>
    </main>
  );
}

export default CharactersPage;
