import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <div>
          <h1 className={styles.Navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.Navbar__list}>
            <li className={styles.Navbar__item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.Navbar__item}>
              <Link to='/movie/create'>Add Movie </Link>{" "}
            </li>
            <li className={styles.Navbar__item}>
              <Link to='/movie/popular'>Popular</Link>
            </li>
            <li className={styles.Navbar__item}>
              <Link to='/movie/now'>Now Playing</Link>
            </li>
            <li className={styles.Navbar__item}>
              <Link to='/movie/top'>Top Rated</Link>
            </li>
            {/* <li className={styles.Navbar__item}>
              <Link to='movie/top'>Top Rated</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
