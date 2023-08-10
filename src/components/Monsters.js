import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMonsters } from '../redux/botw/Api';
import { setClickedCardId } from '../redux/botw/botwSlice';
import Card from './Card';
import CardDetails from './CardDetails';
import sword from '../images/masterSword4.png';

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

  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigate) {
      navigate(-1);
    }
  };

  return (
    <div className="infoMenu">
      <section className="selectCardSection">
        <div className="selectCardSection__monsters selectCardSection__all">
          <h2>Monsters</h2>
          <h3>80</h3>
          <button type="button" onClick={handleGoBack} className="selectCardSection__navButton">
            <img className="selectCardSection__masterSword" src={sword} alt="master sword" />
          </button>
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
      <CardDetails />
    </div>
  );
}

export default Monsters;
