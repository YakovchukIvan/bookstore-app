import { Outlet } from 'react-router-dom';

import styles from './Main.Layouts.module.scss';
import Menu from '@/widgets/Menu';
import Footer from '@/widgets/Footer';

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
