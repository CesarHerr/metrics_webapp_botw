import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Api</h1>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
}
export default Navbar;
