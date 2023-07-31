import PropTypes from 'prop-types';

function Card({ name, image, category }) {
  return (
    <li>
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
    </li>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
