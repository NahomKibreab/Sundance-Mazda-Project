import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get("/db").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // const names = data && data.map((d) => <div key={d.id}>{d.name}</div>);
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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
}

export default App;
