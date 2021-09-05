import classes from "./BlogItem.module.scss";
import { useHistory } from "react-router";
import back from "../../assets/backk.svg"

const BlogItem = (props) => {

  const history = useHistory();
  const clickHandler=(e)=>{
    e.preventDefault();
    history.push('/home')

  }

  return (
    <section className={classes.bg}>
      <div className={classes.card}>
        <div className={classes.title}>
          <p>{props.post.title}</p>
          <img
            onClick={clickHandler}
            src={back}
            width="50"
            alt="home"
          />
        </div>

        <img className={classes.img} src={props.post.image} alt="#" />


        <div className={classes.content}>{props.post.content}</div>
      </div>
    </section>
  );
};

export default BlogItem;
