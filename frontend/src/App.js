import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarDetails from "./components/CarDetails";
import CarDetailsTab from "./components/CarDetailsTab";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
// import StripeCheckout from "react-stripe-checkout";
// import useStripe from "./hooks/useStripe";
// import { useState } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cars, setCars] = useState();
  // const { product, setProduct, makePayment } = useStripe();

  useEffect(() => {
    const vehicles = async () => {
      const response = await axios.get("/api/cars");

      setCars(response.data);
    };
    vehicles();
  }, []);

  const removeCar = (id) => {
    const newCars = [...cars];
    console.log("id", id, "before newCars", newCars);
    newCars.splice(0, 1);
    console.log("id", id, "after newCars", newCars);
    setCars(newCars);
  };

  const vehicles =
    cars &&
    cars.map((car, index) => (
      <Grid item key={index}>
        <VehicleCard {...car} removeCar={removeCar} index={index} />
      </Grid>
    ));

  return (
    <Router>
      <div className="App">
        <Grid container direction="column" justifyContent="space-between">
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item sx={{ minHeight: "88vh" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent={"center"}
                // sx={{ paddingTop: "16px" }}
              >
                {/* <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_SKEY}
              token={makePayment}
              name="Vehicle Purchase"
              amount={product.price * 100}
            /> */}
                <Switch>
                  <Route path="/cars/:carId">
                    <Grid container item justifyContent="center">
                      <Grid item md={8}>
                        <CarDetails />
                      </Grid>
                    </Grid>
                  </Route>
                  <Route path="/cars">
                    <Grid
                      container
                      item
                      justifyContent="center"
                      spacing={2}
                      md={10}
                      sx={{ marginTop: "16px" }}
                    >
                      {cars && vehicles}
                    </Grid>
                  </Route>

                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
