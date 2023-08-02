import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from '../redux/botw/Api';
import '../styles/CardDetails.css';
import heart from '../images/heart.png';

function CardDetails() {
  const { clickedCardId, detail } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clickedCardId !== null) {
      dispatch(fetchDetail(`entry/${clickedCardId}`));
    }
  }, [dispatch, clickedCardId]);

  return (
    <section className="cardDetails">
      <h2>{detail.name ? detail.name[0].toUpperCase() + detail.name.substring(1) : 'Name'}</h2>
      <h6>
        Category :
        {' '}
        {detail.category}
      </h6>
      <p>{detail.description}</p>
      <img className="creatureImg" src={detail.image} alt="creature detail" />
      <span className="locations">
        <h3>
          Common Locations:
        </h3>
        <h3>
          {detail.common_locations
            ? ` ${detail.common_locations.join(', ')[0].toUpperCase()}${detail.common_locations.join(', ').substring(1)}`
            : 'Unknown'}
        </h3>
      </span>
      <ul className="infoCard">
        <li>

          <h4> Power: </h4>
          <h5>{detail.id}</h5>
        </li>
        <li>
          <h4>Hearts recovered:</h4>
          <h5>{detail.hearts_recovered || <i>No recover</i>}</h5>
          <img className="heart" src={heart} alt="heart" />
        </li>
        <li>
          <h4>Drops:</h4>
          <h5>{detail.drops ? detail.drops.join(', ')[0].toUpperCase() + detail.drops.join(', ') : <i>No drops</i> }</h5>

        </li>
        <li>
          <h4>
            Cooking effect:
            {detail.cooking_effect || <h5><i>No effect</i></h5>}
          </h4>
        </li>
        <li>
          <h4>
            Attack:
            {' '}
            {detail.properties ? Object.values(detail.properties)[0] : <h5><i>No Attack</i></h5>}
          </h4>
          <h4>
            Defense:
            {' '}
            {detail.properties ? Object.values(detail.properties)[1] : <h5><i>No Defense</i></h5>}
          </h4>
        </li>
      </ul>
    </section>
  );
}

export default CardDetails;
