import { NavLink } from 'react-router-dom';
import zelda from '../images/zeldaicon.png';
import '../styles/Navbar.css';
import sword from '../images/masterSword.png';

function Navbar() {
  return (
    <header>
      <nav>
        <span> 📚Encyclopedia</span>
        <NavLink to="/"><img src={sword} alt="master sword" /></NavLink>
        <h1>
          Zelda - Breath of the Wild
        </h1>
        <img className="zeldaIcon" src={zelda} alt="zelda icon" />
      </nav>
    </header>
  );
}
export default Navbar;
