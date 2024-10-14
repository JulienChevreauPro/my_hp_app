import "./HousesPage.css";
import HousesCard from "../components/HousesCard";

function HousesPage() {
  return (
    <>
      <section className="houses">
        <h2 className="houses__title">Choose your house</h2>
        <HousesCard houseName="Hufflepuff" />
        <HousesCard houseName="Ravenclaw" />
        <HousesCard houseName="Slytherin" />
        <HousesCard houseName="Gryffindor" />
      </section>
    </>
  );
}

export default HousesPage;
