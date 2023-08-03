import { useNavigate, NavLink } from 'react-router-dom';
import zelda from '../images/zeldaicon.png';
import '../styles/Navbar.css';
import sword from '../images/masterSword4.png';

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
        <button type="button" onClick={handleGoBack} className="nav-button">
          <img src={sword} alt="master sword" />
        </button>
        <NavLink className="titleNav" to="metrics_webapp_botw/">
          <h1>
            Zelda - Botw
          </h1>
          <p> 📚Encyclopedia</p>
        </NavLink>
        <img className="zeldaIcon" src={zelda} alt="zelda icon" />
      </nav>
    </header>
  );
}
export default Navbar;
