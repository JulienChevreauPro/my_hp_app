import "./HomePage.css";

function HomePage() {
  return (
    <>
      <h1 className="home__title">Harry Potter</h1>
      <img
        src="src/assets/images/Flying_HP.jpg"
        alt="Harry Potter volant de nuit sur son balai magique"
        className="home__picture-harry"
      />
      <h2 className="home__subtitle">The wonders of the magical world</h2>
      <p className="home__intro">
        Enter the enchanted realm of Harry Potter, where magic, mystery, and
        adventure await you. Immerse yourself in the magical universe of
        characters, houses, and spells that have captivated fans worldwide.
      </p>
      <img
        src="src/assets/images/HP_Hermione_Ron.jpg"
        alt="Harry, Hermione et Ron"
        className="home__picture-trio"
      />
      <p className="home__intro">
        Discover the vibrant characters that populate the wizarding world, from
        the courageous trio of Harry, Ron, and Hermione to dark and enigmatic
        figures like Severus Snape and Bellatrix Lestrange.
      </p>
      <img
        src="src/assets/images/Houses.jpg"
        alt="Blasons des maisons de Poudlard"
        className="home__picture-houses"
      />
      <p className="home__intro">
        Explore the prestigious houses of Hogwarts - Gryffindor, Slytherin,
        Ravenclaw, and Hufflepuff - each with its own unique traits and values.
      </p>
      <p className="home__intro">
        But can there be magic without spells? Learn the incantations that bring
        the wizarding world to life, from the basics like &#39;Lumos&#39; and
        &#39;Expelliarmus&#39; to powerful and forbidden curses like &#39;Avada
        Kedavra&#39;.
      </p>
      <img
        src="src/assets/images/VdmSort.jpg"
        alt="Voldemort lance un sort"
        className="home__picture-sort"
      />
      <p className="home__intro">
        Whether you&#39;re a seasoned Hogwarts alumnus or a curious Muggle eager
        to explore the wonders of the wizarding world, &#39;Wonders of the
        Magical World&#39; is your ultimate destination for all things Harry
        Potter. So grab your wand, don your robes, and get ready to embark on a
        magical journey like no other!
      </p>
    </>
  );
}

export default HomePage;
