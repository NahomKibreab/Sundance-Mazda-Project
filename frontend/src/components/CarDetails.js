import {
  Button,
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

export default function CarDetails() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const styles = () => {
    if (matches) {
      return {
        paddingRight: 0,
      };
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
  return (
    <>
      <Card sx={{ border: "none", boxShadow: "none" }}>
        <CardHeader title="Model, Make, Year" subheader="$24,357.68" />
        <CardMedia
          component="img"
          width="50%"
          image="https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/mazda/3-sport/gx/5-doors-hatchback/exteriorColors/13520_cc0640_001_41w.png"
          alt="Mazda Car Image"
        />
        <CardContent sx={styles}>
          <CarCarousel />
        </CardContent>
        <CarDetailsTab />
        <CardContent>
          <Typography variant="h4" mb={2}>
            Payment Options
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper varinat="contained" sx={paymentBoxStyles} elevation={10}>
                <Typography variant="overline">Monthly Payment</Typography>
                <Button variant="contained" color="secondary">
                  Pay Monthly
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper varinat="contained" sx={paymentBoxStyles} elevation={10}>
                <Typography variant="overline">Pay Now</Typography>
                <Button variant="contained" color="secondary">
                  Buy Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
