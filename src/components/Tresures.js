import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTreasures } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';
import '../styles/Creatures.css';

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
    <ul className="itemsList">
      <h2>Treasures</h2>
      {treasures
        .map((card) => (
          <Card
            key={card.id}
            image={card.image}
            category={card.category}
            name={card.name[0].toUpperCase() + card.name.substring(1)}
            handleClick={() => handleClick(card.id)}
          />
        ))
        .slice(0, 100)}
    </ul>
  );
}

export default Treasures;
