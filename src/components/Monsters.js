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
    <section className="selectCardSection">
      <div className="selectCardSection__monsters">
        <h2>Monsters</h2>
        <h3>80</h3>
      </div>
      <ul className="itemsList">
        {monsters.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            category={card.category}
            name={card.name[0].toUpperCase() + card.name.substring(1)}
            handleClick={() => handleClick(card.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Monsters;
