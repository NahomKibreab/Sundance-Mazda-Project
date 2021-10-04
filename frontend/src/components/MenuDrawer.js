import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import MenuDrawerIcon, { MenuDrawerLinks } from "../Utils/MenuDrawerIcon";
import { Link } from "react-router-dom";

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Invetory", "About Us", "Reviews", "News"].map(
          (text, index) =>
            text !== "Reviews" && text !== "News" ? (
              <Link
                to={MenuDrawerLinks(text)}
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <ListItem button key={IDBIndex}>
                  <ListItemIcon>{MenuDrawerIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ) : (
              <a
                href={
                  text === "Reviews"
                    ? "https://www.sundancemazda.com/en/news/list/reviews"
                    : "https://www.sundancemazda.com/en/news?limit=12"
                }
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <ListItem button key={IDBIndex}>
                  <ListItemIcon>{MenuDrawerIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </a>
            )
        )}
      </List>
      <Divider />
      <List>
        {["My Garage", "My Profile", "Logout"].map((text, index) => (
          <Link
            to={MenuDrawerLinks(text)}
            style={{ textDecoration: "none", color: "inherit" }}
            key={index}
          >
            <ListItem button key={index}>
              <ListItemIcon>{MenuDrawerIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          size="small"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer("left", true)}
          sx={{
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
