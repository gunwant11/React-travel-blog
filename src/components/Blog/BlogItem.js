import classes from "./BlogItem.module.scss";
import { useHistory } from "react-router";
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
            src="http://getdrawings.com/free-icon/back-button-icon-53.png"
            width="50"
          />
        </div>

        <img className={classes.img} src={props.post.image} alt="#" />

        <div className={classes.description}>{props.post.description}</div>

        <div className={classes.content}>{props.post.content}</div>
      </div>
    </section>
  );
};

export default BlogItem;
