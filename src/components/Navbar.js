import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Api</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="details">
              Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
