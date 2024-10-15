import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./HousesCard.css";

function HousesCard({ houseName }) {
  return (
    <article className={`houses__${houseName}`}>
      <img
        src={`/images/${houseName}Logo.jpg`}
        alt={`${houseName} logo`}
        title={`See all ${houseName}'s students`}
        className="houses__Hufflepuff-logo"
      />
      <Link to={`/houses/${houseName}`}>
        <button
          type="button"
          className={`houses__${houseName}-button`}
          name={`${houseName}`}
        >
          {`${houseName}`}
        </button>
      </Link>
    </article>
  );
}

HousesCard.propTypes = {
  houseName: PropTypes.string.isRequired,
};

export default HousesCard;
