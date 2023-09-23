import Link from 'next/link';
import styles from './styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/schedule'>Schedule</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
