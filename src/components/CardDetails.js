import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from '../redux/botw/Api';

function CardDetails() {
  const { clickedCardId, detail } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clickedCardId !== null) {
      dispatch(fetchDetail(`entry/${clickedCardId}`));
    }
  }, [dispatch, clickedCardId]);

  return (
    <section
      style={{
        backgroundColor: 'rgb(100,100,100)',
        display: 'inline',
        width: '100%',
        height: '1000px',
      }}
    >
      <h2>detail</h2>
      <ul>
        <li>
          <h2>
            {detail.category}
            {' '}
            <span style={{ fontSize: '3rem' }}>{detail.name}</span>
          </h2>
        </li>
        <li><p>{detail.description}</p></li>
        <li>
          <img src={detail.image} alt="creature" />
        </li>
        <li>
          <h3>
            Common Locations:
            {detail.common_locations ? detail.common_locations.join(', ') : 'Unknown'}
          </h3>
        </li>
        <li>
          Power:
          <h3>{detail.id}</h3>
        </li>
        <li>
          Hearts recovered:
          <h3>{detail.hearts_recovered || 'No recover'}</h3>
        </li>
        <li>
          <h3>
            Drops:
            {detail.drops ? detail.drops.join(', ') : 'No drops'}
          </h3>
        </li>
        <li>
          <h3>
            cooking effect:
            {detail.cooking_effect || ' No effect'}
          </h3>
        </li>
        <li>
          <h3>
            Properties:
            {detail.properties ? Object.keys(detail.properties).join(', ') : ' No effect'}
            {detail.properties ? Object.values(detail.properties).join(', ') : 'No'}
          </h3>
        </li>
      </ul>
    </section>
  );
}

export default CardDetails;
