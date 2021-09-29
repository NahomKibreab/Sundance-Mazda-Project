import "./App.css";
import { Button, Grid, Paper } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarCarousel from "./components/CarCarousel";
import CarDetails from "./components/CarDetails";
import CarDetailsTab from "./components/CarDetailsTab";
import Footer from "./components/Footer";
// import StripeCheckout from "react-stripe-checkout";
// import useStripe from "./hooks/useStripe";
// import { useState } from "react";
// import axios from "axios";

function App() {
  // const { product, setProduct, makePayment } = useStripe();

  const cars = [1, 2, 3, 4, 5, 6, 7].map((car) => (
    <Grid item key={car}>
      <VehicleCard />
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
              <Grid item xs={12} sm={2} />
              <Grid
                item
                xs={12}
                sm={8}
                container
                spacing={2}
                justifyContent={"center"}
                sx={{ paddingTop: "16px" }}
              >
                {/* <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_SKEY}
              token={makePayment}
              name="Vehicle Purchase"
              amount={product.price * 100}
            /> */}
                <Switch>
                  <Route path="/cars/1">
                    <CarDetails />
                  </Route>
                  <Route path="/cars">{cars}</Route>

                  <Route path="/"></Route>
                </Switch>
              </Grid>

              <Grid item xs={12} sm={2} />
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
