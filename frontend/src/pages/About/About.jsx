import { Link } from 'react-router-dom';

import { TECHNOLOGY_STACK } from '../../utils/name';
import styles from './About.module.scss';

function About() {
  return (
    <div className={styles.about}>
      <h1>Особистий проект, з використанням таких технологій :</h1>
      <div className={styles.stackBlock}>
        {TECHNOLOGY_STACK.map((item) => (
          <div className={styles.stackItem} key={item}>
            <Link to={item.link}>
              <p>{item.title}</p>
              <div className={styles.stackImg}>
                <img src={item.srcImg} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
