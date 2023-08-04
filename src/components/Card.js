import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Card.css';
import truth from '../images/search.png';

function Card({ name, image, handleClick }) {
  return (
    <li className="cards">
      <NavLink onClick={handleClick} to="../card_detail">
        <span className="truth">
          <img src={truth} alt="length of truth" />
        </span>
        <ul>
          <li>
            <h4>{name}</h4>
          </li>
          <li>
            <img src={image} alt={name} />
          </li>
          <li>
            <h5>Profile</h5>
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
