import { Fragment } from "react";
import classes from "./BlogItem.module.scss";


const BlogItem = (props) => {

  console.log(props.title)
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={props.image} alt="1" />
        </div>
        <div className={classes["img-text"]}>
          <h3>{props.title}</h3>
          <div>{props.description}</div>
          <button >Detail</button>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogItem;
