import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/slide.css";
export default function HomeCarousel() {
  return (
    <Carousel
      className="home-carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <img src="https://img.sm360.ca/images/promo/sundance-mazda/49806//mazda-header-1920x500-promos-tire-offer-en1630533864335.jpg" />
      </div>
      <div>
        <img src="https://img.sm360.ca/images/promo/sundance-mazda/104213//2020-06-sundance-mazda-header-desktop-build-and-price1592490700836.jpg" />
      </div>
      <div>
        <img src="https://img.sm360.ca/images/promo/sundance-mazda/107558//mazda-ab-shared-header-desktop-1920x500-promo-kuro1597347031474.jpg" />
      </div>
    </Carousel>
  );
}
