import { Outlet } from 'react-router-dom';
import Menu from '../widgets/Menu';

function MainLayouts() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default MainLayouts;
