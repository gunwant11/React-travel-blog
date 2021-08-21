import classes from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes["nav-container"]}>
        <div className={classes["nav-item"]}>Home</div>
        <div className={classes["nav-item"]}>Author</div>
        <div className={classes["nav-item"]}>
          <HashLink smooth to="/home#hash">
            Blog
          </HashLink>
        </div>
        <div className={classes["nav-item"]}>Contact</div>
      </div>
    </div>
  );
};
export default Navbar;
