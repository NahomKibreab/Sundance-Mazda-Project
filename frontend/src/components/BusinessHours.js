import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function BusinessHours() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Business Hours"
          centered
          textColor="#000"
          indicatorColor="secondary"
        >
          <Tab label="Sales" {...a11yProps(0)} />
          <Tab label="Service" {...a11yProps(1)} />
          <Tab label="Parts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="business-hours">
        <table>
          <tr>
            <td>Monday</td>
            <td>9:00AM - 8:30PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00AM - 8:30PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9:00AM - 8:30PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9:00AM - 8:30PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9:00AM - 6:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9:00AM - 6:00PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>12:00PM - 5:00PM</td>
          </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1} className="business-hours">
        <table>
          <tr>
            <td>Monday</td>
            <td>7:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>7:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>7:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>7:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>7:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>8:00AM - 4:00PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={2} className="business-hours">
        <table>
          <tr>
            <td>Monday</td>
            <td>7:30AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>7:30AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>7:30AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>7:30AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>7:30AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>8:00AM - 4:00PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
      </TabPanel>
    </Box>
  );
}
