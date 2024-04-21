import { Outlet } from 'react-router-dom';
import Menu from '../widgets/Menu';

import styles from './Main.Layouts.module.scss';
import Footer from '../widgets/Footer';

function MainLayouts() {
  return (
    <>
      <Menu />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayouts;
