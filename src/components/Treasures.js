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
    <section className="selectCardSection">
      <div className="selectCardSection__treasures">
        <span className="material-symbols-outlined">
          arrow_circle_right
        </span>
        <div>
          <h2>Treasures</h2>
          <h3>4</h3>
        </div>
      </div>
      <ul className="itemsList">
        {treasures
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

export default Treasures;
