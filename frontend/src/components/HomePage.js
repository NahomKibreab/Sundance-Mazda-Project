import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
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
    carModels.map((carModel) => {
      return (
        <Grid item xs={7} lg={3}>
          <Card raised>
            <CardActionArea onClick={() => path.push(`/cars/${carModel.id}`)}>
              <CardHeader
                title={`${carModel.year} ${carModel.model} ${carModel.trim}`}
                titleTypographyProps={carModel.trim}
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
    address: "17990 102 Ave NW, Edmonton, AB T5S 1M9",
    lat: 53.544013658365934,
    lng: -113.63180428465739,
  };
  return (
    <>
      <Grid container mt={2}>
        <Grid item>
          <HomeCarousel />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Special Offers</Typography>
        </Grid>
        {models}
      </Grid>
      <Map location={location} zoomLevel={17} />
    </>
  );
}
