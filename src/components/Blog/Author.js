import classes from "./Author.module.scss";
import auth from "../../assets/blogging1.jpg";

const Author = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1 id="author" >Authors Name</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <img className={classes.author} src={auth} alt="#"></img>
    </section>
  );
};

export default Author;
