import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BlogDisplay.module.scss";


const BlogDisplay = (props) => {


  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={props.image} alt="1" />
        </div>
        <div className={classes["img-text"]}>
          <h3>{props.title}</h3>
          <Link to={`/blog/${props.id}`}><button>Read blog</button></Link>
          
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDisplay;
