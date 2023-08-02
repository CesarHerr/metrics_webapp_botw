import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMaterials } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';

function Materials() {
  const dispatch = useDispatch();
  const { materials } = useSelector((state) => state.cards);

  useEffect(() => {
    if (materials.length === 0) {
      dispatch(fetchMaterials());
    }
  }, [dispatch, materials.length]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  return (
    <section className="selectCardSection">
      <div className="selectCardSection__materials">
        <span className="material-symbols-outlined">
          arrow_circle_right
        </span>
        <div>
          <h2>Materials</h2>
          <h3>82</h3>
        </div>
      </div>
      <ul className="itemsList">
        {materials
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
    </section>
  );
}

export default Materials;
