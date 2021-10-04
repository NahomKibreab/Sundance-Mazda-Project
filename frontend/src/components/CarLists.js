import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import VehicleCard from "./VehicleCard";
import useVehiclesData from "../hooks/useVehiclesData";
import { useParams } from "react-router";

export default function CarLists() {
  const { cars } = useVehiclesData();
  const path = useParams();
  console.log("path", path);

  const vehicles =
    Object.values &&
    Object.values(cars).map((car, index) => (
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
          >
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-search" label="Search" variant="standard" />
          </Box>
        </Grid>
      </Grid>
      {cars && vehicles}
    </Grid>
  );
}
