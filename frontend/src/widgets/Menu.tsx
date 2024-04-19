import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav>
        <NavLink to="." end>
          Головна
        </NavLink>
        <NavLink to="/courses">Курси</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
      </nav>
    </div>
  );
}

export default Menu;
