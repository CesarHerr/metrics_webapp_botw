import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMonsters } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';

function Monsters() {
  const dispatch = useDispatch();
  const { monsters } = useSelector((state) => state.cards);

  useEffect(() => {
    if (monsters.length === 0) {
      dispatch(fetchMonsters());
    }
  }, [dispatch, monsters.length]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  return (
    <ul className="itemsList">
      {monsters
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

export default Monsters;
