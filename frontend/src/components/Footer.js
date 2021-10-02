import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import BusinessHours from "./BusinessHours";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "64px" }}>
      <AppBar position="static" color="primary" sx={{ marginTop: "24px" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
            <Typography variant="h6" color="inherit">
              Contact Us
              <br></br>
              <br></br>
            </Typography>
            <Typography variant="h7" fontWeight="bold" color="inherit">
              Sundance Mazda
              <br></br>
            </Typography>
            <Typography variant="h7" fontWeight="light" color="inherit">
              <Link
                to="https://www.google.com/maps?q=Sundance+Mazda+17990+102+Ave+NW+T5S+1M9+AB+Edmonton"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                17990 102 Ave NW,
                <br></br>
                Edmonton, Alberta, T5S 1M9
                <br></br>
                <br></br>
              </Link>
              Sales: 1-844-392-3633
              <br></br>
              Service: 1-844-472-8053
              <br></br>
              Parts: 1-780-454-7278
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="inherit">
              Business Hours
              <BusinessHours />
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
