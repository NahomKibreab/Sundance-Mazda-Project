import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Typography } from "@mui/material";
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map" style={{ width: "100%" }}>
    <Typography variant="h5" p={4}>
      Come Visit Us!
    </Typography>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
