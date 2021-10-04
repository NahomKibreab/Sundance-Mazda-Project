import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import VehicleCard from "./VehicleCard";

export default function CarLists(props) {
  const [cars, setCars] = useState();

  useEffect(() => {
    const vehicles = async () => {
      const response = await axios.get("/api/cars");

      setCars(response.data);
    };
    vehicles();
  }, []);

  const vehicles =
    cars &&
    cars.map((car, index) => (
      <Grid item key={index}>
        <VehicleCard {...car} index={index} />
      </Grid>
    ));
  return (
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
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
  );
}
