import { Grid, Typography, useMediaQuery } from "@mui/material";
import Map from "./HomeMap";
import ReactPlayer from "react-player";

export default function About() {
  const mobileMode = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const location = {
    address: "Sundance Mazda, 17990 102 Ave NW, Edmonton, AB",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sx={{ backgroundColor: "#bec2cb" }} p={2}>
        <Typography variant="h3" px={0.5} fontWeight="light" color="#fff">
          Welcome to Sundance Mazda
        </Typography>
        <Typography variant="h5" px={1}>
          Your Mazda Dealer of Choice in Greater Edmonton
        </Typography>
      </Grid>

      <Grid item xs={12} pt={2} px={4}>
        <Typography variant="h7">
          Welcome to Sundance Mazda, your go-to destination for Mazda vehicles,
          parts, and accessories in Greater Edmonton. Located at 17990 - 102 Ave
          NW in Edmonton, Alberta, we have proudly served the Greater Edmonton
          area since 1975. Run by the Reid family, we care about our customers
          as if they were one of our own. At Sundance Mazda, not only do we sell
          new and pre-owned Mazda vehicles, but we also offer our clients
          personalized service based on their needs and budget. What's more, our
          staff speaks several languages, including Swahili, Hindi, Tagalog,
          Spanish, Urdu, Gujarati, German, Patwa, and Punjabi. This is what
          makes the Sundance Mazda experience one of a kind!
        </Typography>

        <Typography variant="h5" m={2}>
          Sundance Mazda: Your Destination for Expert Service
        </Typography>

        <Typography variant="h7">
          Sundance Mazda offers a complete collection of brand new Mazda
          vehicles as well as reliable pre-owned vehicles that have been
          inspected by our dedicated, knowledgeable team of technicians -
          including two Mazda Master Technicians! If you need servicing,
          Sundance Mazda offers a wide range of after-sales services such as
          repairs and maintenance, and we also offer genuine Mazda parts and
          accessories. At Sundance Mazda, customer service is our top priority
          and that’s why we have competitive prices on Mazda products and
          services. We also have many promotions, rebates, and incentives that
          are updated regularly. We'll do whatever it takes to provide our
          clients with the service and respect they deserve! To learn more about
          Sundance Mazda and the services and vehicles we offer, contact us
          today at 1-844-394-3671 or online using our contact form.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Map location={location} zoomLevel={17} />
      </Grid>
    </Grid>
  );
}
