import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes["nav-container"]}>
        <div className={classes["nav-item"]}>Home</div>
        <div className={classes["nav-item"]}>Blog</div>
        <div className={classes["nav-item"]}>Author</div>
        <div className={classes["nav-item"]}>Contact</div>
      </div>
    </div>
  );
};
export default Navbar;
