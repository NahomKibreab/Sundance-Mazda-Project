import { Grid, Typography } from "@mui/material";
import Map from "./HomeMap";

export default function About() {
  const location = {
    address: "Sundance Mazda, 17990 102 Ave NW, Edmonton, AB",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <>
      <Grid
        container
        mt={2}
        justifyContent="center"
        sx={{ backgroundColor: "#bec2cb" }}
      >
        <Grid item>
          <Typography variant="h3" p={4} fontWeight="light">
            Welcome to Sundance Mazda
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt={2} p={8}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Your Mazda Dealer of Choice in Greater Edmonton
          </Typography>
          <br />
          <Grid item xs={12}>
            <Typography variant="h7">
              Welcome to Sundance Mazda, your go-to destination for Mazda
              vehicles, parts, and accessories in Greater Edmonton. Located at
              17990 - 102 Ave NW in Edmonton, Alberta, we have proudly served
              the Greater Edmonton area since 1975. Run by the Reid family, we
              care about our customers as if they were one of our own. At
              Sundance Mazda, not only do we sell new and pre-owned Mazda
              vehicles, but we also offer our clients personalized service based
              on their needs and budget. What's more, our staff speaks several
              languages, including Swahili, Hindi, Tagalog, Spanish, Urdu,
              Gujarati, German, Patwa, and Punjabi. This is what makes the
              Sundance Mazda experience one of a kind!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} mt={2} p={8}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Sundance Mazda: Your Destination for Expert Service
          </Typography>
          <br />
          <Grid item xs={12}>
            <Typography variant="h7">
              Sundance Mazda offers a complete collection of brand new Mazda
              vehicles as well as reliable pre-owned vehicles that have been
              inspected by our dedicated, knowledgeable team of technicians -
              including two Mazda Master Technicians! If you need servicing,
              Sundance Mazda offers a wide range of after-sales services such as
              repairs and maintenance, and we also offer genuine Mazda parts and
              accessories. At Sundance Mazda, customer service is our top
              priority and that’s why we have competitive prices on Mazda
              products and services. We also have many promotions, rebates, and
              incentives that are updated regularly. We'll do whatever it takes
              to provide our clients with the service and respect they deserve!
              To learn more about Sundance Mazda and the services and vehicles
              we offer, contact us today at 1-844-394-3671 or online using our
              contact form.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Map location={location} zoomLevel={17} />
    </>
  );
}
