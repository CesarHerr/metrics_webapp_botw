import { NavLink } from 'react-router-dom';

function Categories() {
  return (
    <ul>
      <li>
        <NavLink to="creatures">
          <article>
            <span>➡️ ▶️</span>
            <h2>Creatures</h2>
            <h3>82</h3>
          </article>
        </NavLink>
      </li>
      <li>
        <NavLink to="equipment">
          <article>
            <span>➡️ ▶️</span>
            <h2>Equipment</h2>
            <h3>184</h3>
          </article>
        </NavLink>
      </li>
      <li>
        <NavLink to="materials">
          <article>
            <span>➡️ ▶️</span>
            <h2>Materials</h2>
            <h3>80</h3>
          </article>
        </NavLink>
      </li>
      <li>
        <NavLink to="monsters">
          <article>
            <span>➡️ ▶️</span>
            <h2>Monsters</h2>
            <h3>80</h3>
          </article>
        </NavLink>
      </li>
      <li>
        <NavLink to="treasures">
          <article>
            <span>➡️ ▶️</span>
            <h2>Treasures</h2>
            <h3>3</h3>
          </article>
        </NavLink>
      </li>
    </ul>
  );
}

export default Categories;
