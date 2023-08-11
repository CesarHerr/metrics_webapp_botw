import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Card.css';
import { useDispatch } from 'react-redux';
import { hideCardList, showCardDetails, showImage } from '../redux/botw/botwSlice';
import truth from '../images/search.png';

function Card({
  name, image, handleClick,
}) {
  const dispatch = useDispatch();

  const handleDisplay = () => {
    dispatch(showCardDetails());
    dispatch(hideCardList());
    dispatch(showImage());
  };

  return (
    <li className="cards">
      <NavLink onClick={handleClick} to="">
        <span className="truth">
          <img src={truth} alt="length of truth" />
        </span>
        <ul>
          <li>
            <h4>{name}</h4>
          </li>
          <li>
            <button type="button" onClick={handleDisplay}>
              <img src={image} alt={name} />
            </button>
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
