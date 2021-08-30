import classes from "./Navbar.module.scss";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className={classes.nav} id="home">
      <div className={classes["nav-container"]}>
        <div className={classes["nav-item"]}>
          <Link
            activeClass={classes.activeClass}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={550}
          >
            Home
          </Link>
        </div>
        <div className={classes["nav-item"]}>
          <Link
            activeClass={classes.activeClass}
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={550}
          >
            Blog
          </Link>
        </div>
        <div className={classes["nav-item"]}>
          <Link
            activeClass={classes.activeClass}
            to="author"
            spy={true}
            smooth={true}
            offset={-70}
            duration={550}
          >
            Author
          </Link>
        </div>
        <div className={classes["nav-item"]}>
          <Link
            activeClass={classes.activeClass}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={550}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
