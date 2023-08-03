import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Card.css';

function Card({
  name, image, handleClick,
}) {
  return (
    <li className="cards">
      <NavLink onClick={handleClick} to="../card_detail">
        <span className="material-symbols-outlined">
          arrow_circle_right
        </span>
        <ul>
          <li>
            <h3>{name}</h3>
          </li>
          <li>
            <img src={image} alt={name} />
          </li>
          <li>
            <h4>Profile</h4>
          </li>
        </ul>
      </NavLink>
    </li>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
