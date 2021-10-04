import "./App.css";
import { Grid, TextField } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import About from "./components/About";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [cars, setCars] = useState();

  useEffect(() => {
    const vehicles = async () => {
      const response = await axios.get("/api/cars");

      setCars(response.data);
    };
    vehicles();
  }, []);

  const removeCar = (id) => {
    const newCars = [...cars];
    newCars.splice(0, 1);
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
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent={"center"}
                alignItems="space-evenly"
              >
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
                      <Grid container item xs={12} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-end",
                              justifyContent: "center",
                            }}
                            component="form"
                          >
                            <SearchIcon
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                              id="input-search"
                              label="Search"
                              variant="standard"
                              name="search"
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      {cars && vehicles}
                    </Grid>
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>

                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }} alignSelf="center">
            <Footer />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
