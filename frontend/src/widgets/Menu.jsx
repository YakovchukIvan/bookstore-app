import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <header>
      <nav>
        <NavLink to="." end>
          Головна
        </NavLink>
        <NavLink to="/books">Книгі</NavLink>
        <NavLink to="/about">Про проект</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
      </nav>
    </header>
  );
}

export default Menu;
