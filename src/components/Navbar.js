import { useNavigate, NavLink } from 'react-router-dom';
import zelda from '../images/zeldaicon.png';
import '../styles/Navbar.css';
import sword from '../images/masterSword.png';

function Navbar() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigate) {
      navigate(-1);
    }
  };

  return (
    <header>
      <nav>
        <span> 📚Encyclopedia</span>
        <button type="button" onClick={handleGoBack} className="nav-button">
          <img src={sword} alt="master sword" />
        </button>
        <NavLink to="/">
          <h1>
            Zelda - Breath of the Wild
          </h1>
        </NavLink>
        <img className="zeldaIcon" src={zelda} alt="zelda icon" />
      </nav>
    </header>
  );
}
export default Navbar;
