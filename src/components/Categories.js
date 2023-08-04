import { NavLink } from 'react-router-dom';
import '../styles/Categories.css';
import truth from '../images/search.png';

function Categories() {
  return (
    <ul className="categoryList">
      <li className="creatures">

        <NavLink to="creatures" className="test">
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <h2>Creatures</h2>
            <h3>82</h3>
          </div>
        </NavLink>

      </li>
      <li className="equipment">

        <NavLink to="equipment">
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <h2>Equipment</h2>
            <h3>184</h3>
          </div>
        </NavLink>

      </li>
      <li className="materials">

        <NavLink to="materials">
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <h2>Materials</h2>
            <h3>80</h3>
          </div>
        </NavLink>

      </li>
      <li className="monsters">

        <NavLink to="monsters">
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <h2>Monsters</h2>
            <h3>80</h3>
          </div>
        </NavLink>

      </li>
      <li className="treasures">

        <NavLink to="treasures">
          <span className="truth">
            <img src={truth} alt="length of truth" />
          </span>
          <div>
            <h2>Treasures</h2>
            <h3>4</h3>
          </div>
        </NavLink>

      </li>
    </ul>
  );
}

export default Categories;
