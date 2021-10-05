import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import HomeCarousel from "./HomeCarousel";
import Map from "./HomeMap";

export default function HomePage() {
  const [carModels, setCarModels] = useState();
  const path = useHistory();

  useEffect(() => {
    axios.get("/api/cars/models").then(({ data }) => {
      setCarModels(data);
    });
  }, []);

  const models =
    carModels &&
    carModels.map((carModel, index) => {
      return (
        <Grid item xs={11} sm={7} lg={3} key={index}>
          <Card raised>
            <CardActionArea onClick={() => path.push(`/cars/${carModel.id}`)}>
              <CardHeader
                title={`${carModel.year} ${carModel.model} ${carModel.trim}`}
                subheader={`$${new Intl.NumberFormat().format(
                  carModel.price / 100
                )}`}
              />
              <CardMedia
                component="img"
                width="30%"
                image={carModel.image_links[0]}
                alt={carModel.model}
              />
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
  const location = {
    address: "Sundance Mazda, 17990 102 Ave NW, Edmonton, AB",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "rgb(57, 62, 64)" }}
      >
        <Grid item paddingBottom={2} paddingTop={2}>
          <Typography variant="h3" fontWeight="light" color="white">
            Sundance Mazda
          </Typography>
          <Typography variant="h7" color="white">
            Edmonton's Premier Dealer, serving Edmonton since 1985.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <HomeCarousel />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Manager's Specials</Typography>
        </Grid>
        {models}
      </Grid>
      <Map location={location} zoomLevel={17} />
    </>
  );
}
