import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMaterials, fetchDetail } from '../redux/botw/Api';
import { setClickedCardId, hideImage, showCardList } from '../redux/botw/botwSlice';
import Card from './Card';
import sword from '../images/masterSword4.png';
import CardDetails from './CardDetails';

function Materials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    materials, isCardListVisible, detail, clickedCardId, isImageVisible,
  } = useSelector((state) => state.cards);

  useEffect(() => {
    if (materials.length === 0) {
      dispatch(fetchMaterials());
    }
  }, [dispatch, materials.length]);

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

  return (
    <div className="infoMenu">
      <section className="selectCardSection">
        <div className="selectCardSection__materials selectCardSection__all">
          <button type="button" onClick={handleHideImg}><h2>Materials</h2></button>
          <h3>82</h3>
          <button type="button" onClick={handleGoBack} className="selectCardSection__navButton">
            <img className="selectCardSection__masterSword" src={sword} alt="master sword" />
          </button>
        </div>
        <ul className="itemsList" style={{ display: isCardListVisible ? 'flex' : 'none' }}>
          {materials.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              category={card.category}
              name={card.name[0].toUpperCase() + card.name.substring(1)}
              handleClick={() => handleClick(card.id)}
            />
          ))}
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

export default Materials;
