import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import VehicleCard from "./VehicleCard";
import useVehiclesData from "../hooks/useVehiclesData";
import { useState } from "react";
import Status from "./Status";

export default function CarLists() {
  const { cars } = useVehiclesData();
  const carLists = Object.values(cars);
  const [searchCars, setSearchCars] = useState();

  const vehicles = carLists.map((car, index) => (
    <Grid item key={index}>
      <VehicleCard {...car} index={index} />
    </Grid>
  ));

  const searchResults = (results) => {
    return results.map((car, index) => (
      <Grid item key={index}>
        <VehicleCard {...car} index={index} />
      </Grid>
    ));
  };

  const search = (event) => {
    const word = event.target.value.toLowerCase();
    const results = carLists.filter((car) => {
      const values = Object.values(car).map((value) => {
        if (typeof value === "string") {
          return value.toLowerCase();
        }
        return value.toString();
      });

      return values.includes(word);
    });
    setSearchCars(results);
    return results;
  };
  if (cars || carLists) {
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
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-search"
                label="Search"
                variant="standard"
                onChange={(event) => search(event)}
              />
            </Box>
          </Grid>
        </Grid>
        {searchCars && searchCars.length > 0
          ? searchResults(searchCars)
          : cars && vehicles}
      </Grid>
    );
  } else {
    return <Status />;
  }
}
