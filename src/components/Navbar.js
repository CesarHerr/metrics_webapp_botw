import { NavLink } from 'react-router-dom';
import zelda from '../images/zeldaicon.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">👈</NavLink>
        <h1>Zelda - Breath of the Wild</h1>
        <img className="zeldaIcon" src={zelda} alt="zelda icon" />
      </nav>
    </header>
  );
}
export default Navbar;
