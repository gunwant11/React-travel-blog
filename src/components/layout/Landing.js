import { Fragment } from "react";
import Author from "../Blog/Author";
import BlogList from "../Blog/BlogList";
import Head from "./Head";
import classes from "./Landing.module.scss";
const Landing = (props) => {
  return (
    <Fragment>
      <Head />
      <section>
        <Author />
        <BlogList blogs={props.blogs} />
      </section>
    </Fragment>
  );
};
export default Landing;
