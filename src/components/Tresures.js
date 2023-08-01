import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTreasures } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';

function Treasures() {
  const dispatch = useDispatch();
  const { treasures } = useSelector((state) => state.cards);

  useEffect(() => {
    if (treasures.length === 0) {
      dispatch(fetchTreasures());
    }
  }, [dispatch, treasures.length]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {treasures
        .map((card) => (
          <Card
            key={card.id}
            image={card.image}
            category={card.category}
            name={card.name}
            handleClick={() => handleClick(card.id)}
          />
        ))
        .slice(0, 100)}
    </ul>
  );
}

export default Treasures;
