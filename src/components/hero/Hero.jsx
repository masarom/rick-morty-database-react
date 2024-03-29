import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Link to='/'>
      <section className={styles.hero} id='hero' title='Home'>
      </section>
    </Link>
  );
};

export default Hero;
