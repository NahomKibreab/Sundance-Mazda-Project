import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import VehicleCard from "./components/VehicleCard";

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
          {cars}
        </Grid>
        <Grid item xs={12} sm={2} sx={{ background: "red" }}>
          Right
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
