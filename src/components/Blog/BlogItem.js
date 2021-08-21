import classes from "./BlogItem.module.scss";
const BlogItem = (props) => {
  return (
    <section className={classes.bg}>
      <div className={classes.card}>
        <div className={classes.title}>{props.post.title}</div>
        <img className={classes.img} src={props.post.image} alt="#" />

        <div className={classes.description}>{props.post.description}</div>

        <div className={classes.content}>
        {props.post.content}
        </div>
      </div>
    </section>
  );
};

export default BlogItem;
