import {
  Home,
  DirectionsCar,
  Info,
  Garage,
  AccountBox,
  Logout,
} from "@mui/icons-material";

// Base the input argument this function will return an icon
export default function MenuDrawerIcon(menu) {
  switch (menu) {
    case "Home":
      return <Home />;
    case "Invetory":
      return <DirectionsCar />;
    case "About Us":
      return <Info />;
    case "My Garage":
      return <Garage />;
    case "My Profile":
      return <AccountBox />;
    case "Logout":
      return <Logout />;
    default:
      break;
  }
}

export function MenuDrawerLinks(menu) {
  switch (menu) {
    case "Home":
      return "/";
    case "Invetory":
      return "/cars";
    case "About Us":
      return "/";
    case "My Garage":
      return "/";
    case "My Profile":
      return "/";
    case "Logout":
      return "/";
    default:
      break;
  }
}
