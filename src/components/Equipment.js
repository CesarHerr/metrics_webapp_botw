import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEquipment } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';

function Equipment() {
  const dispatch = useDispatch();
  const { equipment } = useSelector((state) => state.cards);

  useEffect(() => {
    if (equipment.length === 0) {
      dispatch(fetchEquipment());
    }
  }, [dispatch, equipment.length]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  return (
    <section className="selectCardSection">
      <div className="selectCardSection__equipment">
        <h2>Equipment</h2>
        <h3>184</h3>
      </div>
      <ul className="itemsList">
        {equipment.map((card) => (
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

export default Equipment;
