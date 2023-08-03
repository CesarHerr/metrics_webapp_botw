import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCreature } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';

function Creatures() {
  const dispatch = useDispatch();
  const { creatures } = useSelector((state) => state.cards);

  useEffect(() => {
    if (creatures.length < 1) {
      dispatch(fetchCreature());
    }
  }, [dispatch, creatures.length]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  return (
    <section className="selectCardSection">
      <div className="selectCardSection__creatures">
        <span className="material-symbols-outlined">
          arrow_circle_right
        </span>
        <div>
          <h2>Creatures</h2>
          <h3>82</h3>
        </div>
      </div>
      <ul className="itemsList">
        {creatures
          .map((card) => (
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

export default Creatures;
