import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <NavBar />
        <Grid container>
          <Grid item xs={12} sm={2} sx={{ background: "red" }}>
            Left
          </Grid>
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
                <Link to="/">Home</Link>
                <VehicleCard />
              </Route>
              <Route path="/cars">
                <Link to="/">Home</Link>
                <Link to="/cars/1">Car 1</Link>
                {cars}
              </Route>

              <Route path="/">
                <Link to="/cars">Cars</Link>
              </Route>
            </Switch>
          </Grid>

          <Grid item xs={12} sm={2} sx={{ background: "red" }}>
            Right
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
