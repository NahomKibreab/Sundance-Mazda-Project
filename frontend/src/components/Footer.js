import { AppBar, Typography, Box, Grid } from "@mui/material";
import BusinessHours from "./BusinessHours";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ marginTop: "24px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={4} justifyContent="center" alignItems="center">
            <Typography variant="h6" color="inherit" p={2}>
              Contact Us
            </Typography>
            <Typography variant="h7" fontWeight="bold" color="inherit">
              Sundance Mazda <br />
            </Typography>
            <Typography variant="h7" fontWeight="light" color="inherit">
              <a
                href="https://www.google.com/maps?q=Sundance+Mazda+17990+102+Ave+NW+T5S+1M9+AB+Edmonton"
                style={{ textDecoration: "none", color: "inherit" }}
                target="to_blank"
              >
                17990 102 Ave NW,
                <br />
                Edmonton, Alberta, T5S 1M9
                <br />
              </a>
              <br />
              Sales: 1-844-392-3633
              <br />
              Service: 1-844-472-8053
              <br />
              Parts: 1-780-454-7278
              <br />
            </Typography>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.facebook.com/SundanceMazda"
                style={{ textDecoration: "none", color: "inherit" }}
                target="to_blank"
              >
                <FacebookIcon fontSize="large" className="social-icons" />
              </a>
              <a
                href="https://twitter.com/SundanceMazda"
                style={{ textDecoration: "none", color: "inherit" }}
                target="to_blank"
              >
                <TwitterIcon fontSize="large" className="social-icons" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCa9nctw4WU9kAcvWRm5sXSw"
                style={{ textDecoration: "none", color: "inherit" }}
                target="to_blank"
              >
                <YouTubeIcon fontSize="large" className="social-icons" />
              </a>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="inherit" p={2}>
              Business Hours
              <BusinessHours />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="inherit" p={2}>
              Helpful Links
            </Typography>
            <Grid container item justifyContent="center">
              <Grid item alignItems="flex-start">
                <ul className="footer-link-list">
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cars"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Inventory
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
