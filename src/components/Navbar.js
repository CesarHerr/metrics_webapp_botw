import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Api</h1>
        <NavLink to="/">Home</NavLink>
        <ul>
          <li>
            <NavLink to="creatures">
              Creatures
            </NavLink>
          </li>
          <li>
            <NavLink to="equipment">
              Equipment
            </NavLink>
          </li>
          <li>
            <NavLink to="materials">
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink to="monsters">
              Monsters
            </NavLink>
          </li>
          <li>
            <NavLink to="treasures">
              Treasure
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
