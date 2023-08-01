import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Card({
  name, image, category, handleClick,
}) {
  return (
    <li>
      <NavLink onClick={handleClick} to="../card_detail">
        <span style={{ fontSize: '2rem' }}>
          ▶️ ➡️
        </span>
        <ul>
          <li>
            <h3>{name}</h3>
          </li>
          <li>
            <img src={image} alt="descriptive info about" />
          </li>
          <li>
            <h4>{category}</h4>
          </li>
        </ul>
      </NavLink>
    </li>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
