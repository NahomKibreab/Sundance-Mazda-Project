import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HomeCarousel from "./HomeCarousel";
import Map from "./HomeMap";

export default function HomePage() {
  const largMode = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const location = {
    address: "17990 102 Ave NW, Edmonton, AB T5S 1M9",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <>
      <Grid container mt={largMode ? 2 : 0}>
        <Grid item>
          <HomeCarousel />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Special Offers</Typography>
        </Grid>
        <Grid item md={3}>
          <Card raised>
            <CardActionArea>
              <CardHeader title="Model, Make, Year" subheader="$24,357.68" />
              <CardMedia
                component="img"
                width="30%"
                image="https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/mazda/3-sport/gx/5-doors-hatchback/exteriorColors/13520_cc0640_001_41w.png"
                alt="Mazda Car Image"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card raised>
            <CardActionArea>
              <CardHeader title="Model, Make, Year" subheader="$24,357.68" />
              <CardMedia
                component="img"
                width="30%"
                image="https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/mazda/3-sport/gx/5-doors-hatchback/exteriorColors/13520_cc0640_001_41w.png"
                alt="Mazda Car Image"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card raised>
            <CardActionArea>
              <CardHeader title="Model, Make, Year" subheader="$24,357.68" />
              <CardMedia
                component="img"
                width="30%"
                image="https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/mazda/3-sport/gx/5-doors-hatchback/exteriorColors/13520_cc0640_001_41w.png"
                alt="Mazda Car Image"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Map location={location} zoomLevel={17} />
    </>
  );
}
