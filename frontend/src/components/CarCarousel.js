import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/slide.css";
export default function CarCarousel(props) {
  console.log("imageList:", props.imageList);
  const images = props.imageList.map((image) => {
    return (
      <div>
        <img src={image} alt="Mazda Pictures" />
      </div>
    );
  });
  return (
    <Carousel className="car-carousel" infiniteLoop={true}>
      {images}
    </Carousel>
  );
}
