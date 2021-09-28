import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import axios from "axios";

function App() {
  console.log("Public Key", process.env.REACT_APP_KEY);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get("/db").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // const names = data && data.map((d) => <div key={d.id}>{d.name}</div>);

  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    return axios
      .post("http://localhost:8000/payment", { ...body })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
      })
      .catch((error) => console.log(error));
  };

  const cars = [1, 2, 3, 4, 5, 6, 7].map((car) => (
    <Grid item>
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
            <StripeCheckout
              stripeKey={process.env.REACT_APP_KEY}
              token={makePayment}
              name="Vehicle Purchase"
              amount={product.price * 100}
            />
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
