import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/slide.css";
export default function CarCarousel() {
  return (
    <Carousel className="car-carousel">
      <div>
        <img src="https://images.unsplash.com/photo-1567360300863-47f71100205b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1567360300863-47f71100205b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1567360300863-47f71100205b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80" />
      </div>
    </Carousel>
  );
}