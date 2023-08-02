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
      <h2>Monsters</h2>
      {monsters
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

export default Monsters;
