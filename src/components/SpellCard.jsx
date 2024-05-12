import PropTypes from "prop-types";

import "./SpellCard.css";

function SpellCard ({spells}) {

const {name, description}= spells;

    return (
        <article className="spell-card">
            <h4 className="spell-card__title">{name}</h4>
            <p className="spell-card__description">{description}.</p>
        </article>
    )
}

SpellCard.propTypes = {
    spells: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

export default SpellCard;