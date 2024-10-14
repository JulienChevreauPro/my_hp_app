import { useLoaderData } from "react-router-dom";

import SpellCard from "../components/SpellCard";

import "./SpellsPage.css";

function SpellsPage() {
  const spells = useLoaderData();

  return (
    <>
      <h2 className="spellsPage__title">
        Discover the list of all spells and their effects
      </h2>
      <article className="spellsPage__cards">
        {spells.map((spell) => (
          <SpellCard key={spell.id} spells={spell} />
        ))}
      </article>
    </>
  );
}

export default SpellsPage;
