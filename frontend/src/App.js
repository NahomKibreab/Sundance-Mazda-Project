import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get("/db").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // const names = data && data.map((d) => <div key={d.id}>{d.name}</div>);
  return (
    <div className="App">
        <NavBar/>
        <Grid container>
        <Grid item xs={12} sm={2} sx={{ background: "red" }}>
          Left
        </Grid>
        <Grid item xs={12} sm={8} sx={{ background: "green" }}>
          Center
        </Grid>
        <Grid item xs={12} sm={2} sx={{ background: "red" }}>
          Right
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
