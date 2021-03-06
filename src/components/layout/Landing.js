import { Fragment } from "react";
import Author from "../Blog/Author";
import BlogList from "../Blog/BlogList";
import Footer from "./Footer";
import Head from "./Head";

import classes from "./Landing.module.scss";
const Landing = (props) => {
  return (
    <Fragment>
      <Head />

      <section className={classes.box}>
        <BlogList blogs={props.blogs} />
        <Author />
      </section>
      <Footer/>
    </Fragment>
  );
};
export default Landing;
