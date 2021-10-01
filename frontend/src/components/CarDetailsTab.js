import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InsetList from "./InsetList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CarDetailsTab(props) {
  const [value, setValue] = React.useState(0);

  const { specs, features } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Specifications" {...a11yProps(0)} />
          <Tab label="Features" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={1}>
          {specs.map((item) => (
            <Grid item xs={12} sm={6}>
              <InsetList spec={item} key={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container alignItems="center">
          {features.map((item) => (
            <Grid item xs={6} sm={4} md={3}>
              <InsetList spec={item} key={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
