import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CarCarousel from "./CarCarousel";
import CarDetailsTab from "./CarDetailsTab";
import ConfirmationModalCash from "./ConfirmationModalCash";
import ConfirmationModalFinanace from "./ConfirmationModalFinance";
import { useParams } from "react-router-dom";
import useVehiclesData from "../hooks/useVehiclesData";

export default function CarDetails() {
  const { getCarById } = useVehiclesData();
  let params = useParams();
  const car = getCarById(params.carId);

  console.log("car", car);

  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const styles = () => {
    if (matches) {
      return {};
    }
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  };
  const paymentBoxStyles = () => {
    return {
      height: "200px",
      padding: "1em",
      display: "flex",
      flexDirection: "column",
    };
  };

  const imageList =
    car && car.image_links.filter((image, index) => (index > 0 ? image : null));

  if (car) {
    return (
      <>
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <CardHeader
            title={`${car.year} ${car.model} ${car.trim}`}
            subheader={`$${new Intl.NumberFormat().format(car.price / 100)}`}
          />
          <CardMedia
            component="img"
            width="50%"
            image={car.image_links[0]}
            alt={car.model}
          />
          <CardContent sx={styles()}>
            <CarCarousel imageList={imageList} />
          </CardContent>

          <CarDetailsTab specs={car.specs} features={car.features} />

          <CardContent>
            <Typography variant="h4" mb={2}>
              Payment Options
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper
                  varinat="contained"
                  sx={paymentBoxStyles()}
                  elevation={10}
                >
                  <Typography variant="overline">Monthly Payment</Typography>
                  <ConfirmationModalFinanace />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper
                  varinat="contained"
                  sx={paymentBoxStyles()}
                  elevation={10}
                >
                  <Typography variant="overline">Pay Now</Typography>

                  <ConfirmationModalCash />
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }

  return null;
}
