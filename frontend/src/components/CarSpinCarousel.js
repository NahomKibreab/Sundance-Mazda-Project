import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/slide.css";

//Spining Car Carousel for Car Details Page

export default function CarSpinCarousel(props) {
  return (
    <Carousel
      className="car-spin-carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div>
        <img src={props.image1} alt="Mazda Banner" />
      </div>
      <div>
        <img src={props.image2} alt="Mazda Banner" />
      </div>
      <div>
        <img src={props.image3} alt="Mazda Banner" />
      </div>
    </Carousel>
  );
}
