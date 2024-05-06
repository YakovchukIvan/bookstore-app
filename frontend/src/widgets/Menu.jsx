import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <header>
      <nav>
        <NavLink
          // Варіант додавання класу з стрілковою функціює Active(підсвічування вибраного link) className={({ isActive }) => (isActive ? 'activeLink' : 'link')}

          // isActive це вбудована у тег NavLink назва, тобто в інших компонентах, такого значення як isActive в функції не буде

          // Варіант з атрибутом style
          // style={({ isActive }) =>
          //   isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
          // }
          to="."
          end
        >
          Головна
        </NavLink>
        <NavLink to="/books">Книгі</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
      </nav>
    </header>
  );
}

export default Menu;
