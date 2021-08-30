import { Carousel } from "react-bootstrap";
import img1 from "../../assets/imgs/1.jpg";
import img2 from "../../assets/imgs/2.jpg";
import img3 from "../../assets/imgs/3.jpg";
import img4 from "../../assets/imgs/4.jpg";
import classes from "./CarouselContainer.module.scss";

const CarouselContainer = () => {
  return (
    <div className={classes.image}>
      <Carousel   indicators={false} interval={15000}>
        <Carousel.Item>
          <img className="d-block w-100 " src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
