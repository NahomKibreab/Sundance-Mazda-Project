import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/slide.css";

export default function CarSpinCarousel() {
  return (
    <Carousel
      className="home-carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div>
        <img
          src={
            "https://github.com/NahomKibreab/Sundance-Mazda-Project/blob/master/frontend/public/images/vehicles/CX-9/CX-9-1.png?raw=true"
          }
          alt="Mazda Banner"
        />
      </div>
      <div>
        <img
          src={
            "https://github.com/NahomKibreab/Sundance-Mazda-Project/blob/master/frontend/public/images/vehicles/CX-9/CX-9-8.png?raw=true"
          }
          alt="Mazda Banner"
        />
      </div>
      <div>
        <img
          src={
            "https://github.com/NahomKibreab/Sundance-Mazda-Project/blob/master/frontend/public/images/vehicles/CX-9/CX-9-9.png?raw=true"
          }
          alt="Mazda Banner"
        />
      </div>
    </Carousel>
  );
}
