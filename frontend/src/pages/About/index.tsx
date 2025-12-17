import { Link } from 'react-router-dom';

import styles from './About.module.scss';
import { TECHNOLOGY_STACK } from '@/constants/constants';

const About = () => (
  <div className={styles.about}>
    <h1>Особистий проект, з використанням таких технологій :</h1>
    <div className={styles.stackBlock}>
      {TECHNOLOGY_STACK.map((item) => (
        <div className={styles.stackItem} key={item.title}>
          <Link to={item.link} target="_blank" rel="noopener noreferrer">
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

export default About;
