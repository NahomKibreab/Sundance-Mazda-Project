import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import AccountCircle from "@mui/icons-material/AccountCircle";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Button, Grid, useMediaQuery } from "@mui/material";
import { PhoneEnabled } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  const hideInMobileMode = useMediaQuery((theme) => theme.breakpoints.up("md"));

  // const anchorElOnChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  // const menuOnChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.currentTarget);
  };
  // const handleMenu = (event) => {
  //   setMenu(event.currentTarget);
  // };

  const anchorElOnClose = () => {
    setAnchorEl(null);
  };
  const phoneNumberOnClose = () => {
    setPhoneNumber(null);
  };
  const menuOnClose = () => {
    setMenu(null);
  };

  const mazdaLogo = () => {
    return (
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Avatar
            alt="Mazda Logo"
            variant="square"
            src="/images/Sundance-Logo-3.png"
          />
        </Link>
      </IconButton>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "64px" }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="fixed">
        <Toolbar>
          {hideInMobileMode ? mazdaLogo() : <MenuDrawer />}
          <Menu
            id="menu-appbar"
            anchorEl={menu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(menu)}
            onClose={menuOnClose}
          >
            <MenuItem onClick={menuOnClose}>Profile</MenuItem>
            <MenuItem onClick={menuOnClose}>My account</MenuItem>
          </Menu>

          <Box sx={{ flexGrow: 1 }}>
            {!hideInMobileMode ? (
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>{mazdaLogo()}</Grid>
              </Grid>
            ) : (
              <>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">Home</Button>
                </Link>
                &#124;
                <Link
                  to="/cars"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">Inventory</Button>
                </Link>
                &#124;
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button color="inherit">About Us</Button>
                </Link>
                &#124;
                <a
                  href="https://www.sundancemazda.com/en/news/list/reviews"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                >
                  <Button color="inherit">Reviews</Button>
                </a>
                &#124;
                <a
                  href="https://www.sundancemazda.com/en/news?limit=12"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                >
                  <Button color="inherit">News</Button>
                </a>
              </>
            )}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlePhoneNumber}
                color="inherit"
              >
                <PhoneEnabled />
              </IconButton>
              {hideInMobileMode && (
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleAnchorEl}
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  <AccountCircle />
                </IconButton>
              )}

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(phoneNumber)}
                onClose={phoneNumberOnClose}
              >
                <MenuItem onClick={phoneNumberOnClose}>
                  Sales: 1-844-394-3633
                </MenuItem>
                <MenuItem onClick={phoneNumberOnClose}>
                  Service: 1-844-472-8053
                </MenuItem>
                <MenuItem onClick={phoneNumberOnClose}>
                  Parts: 1-780-454-7278
                </MenuItem>
              </Menu>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={anchorElOnClose}
              >
                <MenuItem onClick={anchorElOnClose}>My Profile</MenuItem>
                <MenuItem onClick={anchorElOnClose}>My Garage</MenuItem>
                <MenuItem onClick={anchorElOnClose}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
