import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInfo } from '../redux/botw/botwSlice';
import Card from './Card';

function CardsList() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          category={card.category}
          name={card.name}
        />
      ))}
    </ul>
  );
}

export default CardsList;
