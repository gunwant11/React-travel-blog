import { Fragment } from "react";
import BlogItem from "./BlogItem";


const BlogList = (props) => {
  return (
    <Fragment>
      <div >
        {props.blogs.map((data) => (
          <BlogItem
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
