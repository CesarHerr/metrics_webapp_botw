import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTreasures, fetchDetail } from '../redux/botw/Api';
import { setClickedCardId, hideImage, showCardList } from '../redux/botw/botwSlice';
import Card from './Card';
import '../styles/Creatures.css';
import CardDetails from './CardDetails';
import sword from '../images/masterSword4.png';

function Treasures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    treasures, isCardListVisible, detail, clickedCardId, isImageVisible,
  } = useSelector((state) => state.cards);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (treasures.length === 0) {
      dispatch(fetchTreasures());
    }
  }, [dispatch, treasures.length]);

  useEffect(() => {
    if (clickedCardId !== null) {
      dispatch(fetchDetail(`entry/${clickedCardId}`));
    }
  }, [dispatch, clickedCardId]);

  const handleClick = (id) => {
    dispatch(setClickedCardId(id));
  };

  const handleGoBack = () => {
    if (navigate) {
      navigate(-1);
    }
  };

  const handleHideImg = () => {
    dispatch(hideImage());
    dispatch(showCardList());
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterList = treasures.filter(
    (name) => name.name.includes(search),
  );

  return (
    <div className="infoMenu">
      <section className="selectCardSection">
        <div className="selectCardSection__treasures selectCardSection__all">
          <div className="selectCardSection__all--search">
            <button type="button" onClick={handleHideImg}><h2>Treasures</h2></button>
            <input type="text" placeholder="Type a name" value={search} onChange={handleSearch} />
          </div>
          <h3>4</h3>
          <button type="button" onClick={handleGoBack} className="selectCardSection__navButton">
            <img className="selectCardSection__masterSword" src={sword} alt="master sword" />
          </button>
        </div>
        <ul className="itemsList" style={{ display: isCardListVisible ? 'flex' : 'none' }}>
          {filterList.length > 0 ? (filterList.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              category={card.category}
              name={card.name[0].toUpperCase() + card.name.substring(1)}
              handleClick={() => handleClick(card.id)}
            />
          ))
          ) : (
            <>
              <p>Not Results 😭!! </p>
              <p>Try another name 😄</p>
            </>
          )}
        </ul>
        <div className="selectCardSection__info" style={{ display: isImageVisible ? 'flex' : 'none' }}>
          <img
            className="selectCardSection__info--img"
            src={detail.image}
            alt={`${detail.name} card`}
          />
        </div>
      </section>
      <CardDetails />
    </div>
  );
}

export default Treasures;
