import { Fragment } from "react";
import BlogDisplay from "./BlogDisplay";
import classes from './BlogList.module.scss'

const BlogList = (props) => {
  var result = Object.values(props.blogs)

  return (
    <Fragment>
      <div className={classes.grid_container}>
        {result.map((data) => (
          <BlogDisplay
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            description={data.description}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BlogList;
