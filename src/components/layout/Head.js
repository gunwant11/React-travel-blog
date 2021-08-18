
import classes from "./Head.module.scss";
import Navbar from "../UI/Navbar";

import CarouselContainer from "./CarouselContainer";

const Head = () => {
  return (
    <section className={classes.head}>
      <div className={classes["title-box"]}>
        <Navbar />
        <h1>Travel Blog</h1>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </div>
        <a href="/"><button className={classes.button}>View Blog </button></a>

      </div>
      <CarouselContainer />
    </section>
  );
};

export default Head;
