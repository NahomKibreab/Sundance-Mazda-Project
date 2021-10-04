import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import CarLists from "./components/CarLists";

function App() {
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
                    <CarLists />
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
