import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
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
import { Box } from "@mui/system";
import BasicTable from "./BasicTable";
import StripeCheckout from "react-stripe-checkout";
import useStripe from "../hooks/useStripe";
import { useState, useEffect } from "react";
import SnackbarNotification from "./SnackbarNotification";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CarDetails() {
  const { getCarById } = useVehiclesData();
  let params = useParams();
  const car = getCarById(params.carId);
  const path = useHistory();

  // Success Notification
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log("car", car);

  // Stripe Payment Custome hooks
  const { product, setProduct, makePayment, status, email } = useStripe();

  const totalPrice =
    car && Number.parseInt(car.price + car.price * 0.05 + 29900);
  console.log("totalPrice", totalPrice);

  useEffect(() => {
    if (car) {
      setProduct({
        name: `${car.year} ${car.model} ${car.trim}`,
        price: totalPrice,
        productBy: car.make,
      });
    }
  }, [car]);

  // Display success notification if Stripe payment completed
  useEffect(() => {
    if (status) {
      handleClick();
      axios.put(`/api/cars/${car.id}`).then((res) => {
        console.log("response from sold car route", res);
      });
      setTimeout(() => {
        path.push("/cars");
      }, 3000);
    }
  }, [status, email]);

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
      minHeight: "200px",
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
              Price Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper
                  varinat="contained"
                  sx={paymentBoxStyles()}
                  elevation={10}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "light" }}>
                      Pay Monthly
                    </Typography>
                  </Box>
                  <Divider variant="middle" />

                  <Box sx={{ m: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                    >{`$${new Intl.NumberFormat().format(
                      car.price / 100
                    )}`}</Typography>
                  </Box>
                  <Divider variant="middle" />
                  <Box sx={{ m: 2 }}>
                    <BasicTable price={car.price} />
                  </Box>
                  <Divider variant="middle" />

                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_SKEY}
                    token={makePayment}
                    name={`${car.year} ${car.model} ${car.trim}`}
                    amount={product.price}
                  >
                    <Button variant="contained" color="secondary">
                      Pay with Card
                    </Button>
                  </StripeCheckout>
                  <SnackbarNotification
                    open={open}
                    handleClose={handleClose}
                    message={
                      email &&
                      `Payment confirmed! Bill of sale has been sent to ${email}`
                    }
                  />
                  <ConfirmationModalFinanace />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper
                  varinat="contained"
                  sx={paymentBoxStyles()}
                  elevation={10}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "light" }}>
                      Pay Once
                    </Typography>
                  </Box>
                  <Divider variant="middle" />

                  <Box sx={{ m: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                    >{`$${new Intl.NumberFormat().format(
                      (totalPrice / 100).toFixed(2)
                    )}`}</Typography>
                  </Box>
                  <Divider variant="middle" />
                  <Box sx={{ m: 2 }}>
                    <BasicTable price={car.price} tax={car.price * 0.05} />
                  </Box>
                  <Divider variant="middle" />
                  <Box sx={{ m: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Total:{" $"}
                      {new Intl.NumberFormat().format(
                        (totalPrice / 100).toFixed(2)
                      )}
                    </Typography>
                  </Box>

                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_SKEY}
                    token={makePayment}
                    name={`${car.year} ${car.model} ${car.trim}`}
                    amount={product.price}
                  >
                    <Button variant="contained" color="secondary">
                      Pay with Card
                    </Button>
                  </StripeCheckout>
                  <SnackbarNotification
                    open={open}
                    handleClose={handleClose}
                    message={
                      email &&
                      `Payment confirmed! Bill of sale has been sent to ${email}`
                    }
                  />
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
