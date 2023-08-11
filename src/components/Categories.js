import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/Categories.css';
import truth from '../images/search.png';
import cursor from '../images/whiteIcon.png';
import { hideImage, showCardList } from '../redux/botw/botwSlice';

function Categories() {
  const dispatch = useDispatch();
  const handleList = () => {
    dispatch(showCardList());
    dispatch(hideImage());
  };
  return (
    <ul className="categoryList">
      <li className="creatures">

        <NavLink to="creatures" onClick={handleList}>
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <img className="creatures__arrowIcon" src={cursor} alt="white cursor" />
            <h2>Creatures</h2>
            <h3>82</h3>
          </div>
        </NavLink>

      </li>
      <li className="equipment">

        <NavLink to="equipment" onClick={handleList}>
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <img className="creatures__arrowIcon" src={cursor} alt="white cursor" />
            <h2>Equipment</h2>
            <h3>184</h3>
          </div>
        </NavLink>

      </li>
      <li className="materials">

        <NavLink to="materials" onClick={handleList}>
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <img className="creatures__arrowIcon" src={cursor} alt="white cursor" />
            <h2>Materials</h2>
            <h3>80</h3>
          </div>
        </NavLink>

      </li>
      <li className="monsters">

        <NavLink to="monsters" onClick={handleList}>
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <img className="creatures__arrowIcon" src={cursor} alt="white cursor" />
            <h2>Monsters</h2>
            <h3>80</h3>
          </div>
        </NavLink>

      </li>
      <li className="treasures">

        <NavLink to="treasures" onClick={handleList}>
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <img className="creatures__arrowIcon" src={cursor} alt="white cursor" />
            <h2>Treasures</h2>
            <h3>4</h3>
          </div>
        </NavLink>

      </li>
    </ul>
  );
}

export default Categories;
