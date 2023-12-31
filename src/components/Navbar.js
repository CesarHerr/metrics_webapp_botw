import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import zelda from '../images/zeldaicon.png';
import '../styles/Navbar.css';
import sword from '../images/masterSword4.png';
import logo from '../images/botw5.webp';
import { hideCardDetails, hideImage } from '../redux/botw/botwSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoBack = () => {
    dispatch(hideImage());
    dispatch(hideCardDetails());
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
          <img className="titleNav__zeldaIconDesktop" src={logo} alt="logo breath of the wild" />
          <h1>
            Zelda - Botw
          </h1>
          <p> 📚Encyclopedia</p>
        </NavLink>
        <img className="titleNav_zeldaIconMobile" src={zelda} alt="zelda icon" />
      </nav>
    </header>
  );
}
export default Navbar;
