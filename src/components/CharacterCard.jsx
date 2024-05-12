import PropTypes from "prop-types";

import "./CharacterCard.css";

function CharacterCard({ characters }) {
  const {
    name,
    species,
    gender,
    house,
    dateOfBirth,
    ancestry,
    eyeColour,
    hairColour,
    wand,
    patronus,
    image,
  } = characters;
  const { wood, core, length } = wand;

  return (
    <article className="card">
      <h4 className="card__title">
        {name} ({house})
      </h4>
      {image !== "" ? (
        <img src={image} alt={name} className="card__picture"/>
      ) : (
        <p className="card__no-picture">No available picture.</p>
      )}
      <p className="card__date-of-birth">
        { dateOfBirth !== null ? `Born on ${dateOfBirth}.` : "Unknown date of birth."}
      </p>
      <p className="card__description">
        {species!=="" && gender!=="" && ancestry!=="" && eyeColour!=="" && hairColour!==""?
        `This ${species} ${ancestry} has ${eyeColour} eyes and ${hairColour} hair.` 
        : "No description available."    }
      </p>
      <p className="card__wand">
        {wood === "" && core === "" && length === null
          ? "No wand description."
          : `Its wand is made of ${wood}, with a core of ${core} and measures ${length} inches.`}
      </p>
      <p className="card__patronus">
        {patronus !== "" ? `Its patronus takes the form of a ${patronus}.` : ""}
      </p>
    </article>
  );
}

CharacterCard.propTypes = {
  characters: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string,
    gender: PropTypes.string,
    house: PropTypes.string,
    dateOfBirth: PropTypes.string,
    ancestry: PropTypes.string,
    eyeColour: PropTypes.string,
    hairColour: PropTypes.string,
    wand: PropTypes.shape({
      wood: PropTypes.string,
      core: PropTypes.string,
      length: PropTypes.number,
    }),
    patronus: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
