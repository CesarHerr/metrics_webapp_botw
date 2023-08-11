import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from '../redux/botw/Api';
import '../styles/CardDetails.css';
import heart from '../images/heart.png';
import sword2 from '../images/masterSword4.png';
import { hideCardDetails, hideImage, showCardList } from '../redux/botw/botwSlice';

function CardDetails() {
  const { clickedCardId, detail, isCardDetailsVisible } = useSelector(
    (state) => state.cards,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (clickedCardId !== null) {
      dispatch(fetchDetail(`entry/${clickedCardId}`));
    }
  }, [dispatch, clickedCardId]);

  const handleClose = () => {
    dispatch(hideCardDetails());
    dispatch(showCardList());
    dispatch(hideImage());
  };

  return (
    <section
      className="cardDetails"
      style={{ display: isCardDetailsVisible ? 'inline' : 'none' }}
    >
      <div className="cardDetails__close">
        <button type="button" onClick={handleClose}>
          <img src={sword2} alt="master sword closing" />
          <img src={sword2} alt="master sword closing" />
        </button>
      </div>
      <h2>
        {detail.name
          ? detail.name[0].toUpperCase() + detail.name.substring(1)
          : 'Name'}
      </h2>
      <h6>
        Category :
        {detail.category}
      </h6>
      <p className="cardDetails__description">{detail.description}</p>
      <img
        className="creatureImg"
        src={detail.image}
        alt={`${detail.name} card`}
      />
      <span className="locations">
        <h3>Common Locations:</h3>
        <p>
          {detail.common_locations
            ? ` ${detail.common_locations
              .join(', ')[0]
              .toUpperCase()}${detail.common_locations
              .join(', ')
              .substring(1)}`
            : 'Unknown'}
        </p>
      </span>
      <ul className="infoCard">
        <li>
          <h4> Power: </h4>
          <p>{detail.id}</p>
        </li>

        {detail.hearts_recovered ? (
          <li>
            <h4>Hearts recovered:</h4>
            <p>{detail.hearts_recovered}</p>
            <img className="heart" src={heart} alt="heart" />
          </li>
        ) : null }

        {detail.drops && detail.drops.length > 0 ? (
          <li>
            <h4>Drops:</h4>
            <p>
              {detail.drops.join(', ')[0].toUpperCase() + detail.drops.join(',').substring(1)}
            </p>
          </li>
        ) : null}

        <li>
          <h4>Cooking effect:</h4>
          <p>{detail.cooking_effect || <i>No effect</i>}</p>
        </li>
        <li>
          <h4>Attack:</h4>
          <p>
            {detail.properties ? (
              Object.values(detail.properties)[0]
            ) : (
              <i>No Attack</i>
            )}
          </p>
          <h4>Defense:</h4>
          <p>
            {detail.properties ? (
              Object.values(detail.properties)[1]
            ) : (
              <i>No Defense</i>
            )}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default CardDetails;
