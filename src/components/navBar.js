import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import style from './navBar.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.div}>
      <div className={style.insideDiv1}>
        <h1 className={`${style.title} ${style.font1Bold}`}>Bookstore CMS</h1>
        <div className={style.linksDiv}>
          <Link to="/" className={`${style.link} ${style.font1Reg}`}>BOOKS</Link>
          <Link to="/categories" className={style.link}>CATEGORIES</Link>
        </div>
      </div>
      <div className={style.insideDiv2}>
        <BsFillPersonFill className={style.icon} />
      </div>
    </div>
  </nav>
);

export default NavBar;
