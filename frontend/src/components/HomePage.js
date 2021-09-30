import HomeCarousel from "./HomeCarousel";
import Map from "./HomeMap";

export default function HomePage() {
  const location = {
    address: "17990 102 Ave NW, Edmonton, AB T5S 1M9",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <>
      <HomeCarousel />
      <Map location={location} zoomLevel={17} />
    </>
  );
}
