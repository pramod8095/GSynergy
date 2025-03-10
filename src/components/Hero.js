import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from '@mui/icons-material/Category';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Stores from "./sections/Stores";
import SKUApp from "./sections/SKUApp";
import Planning from "./sections/Planning";
import ChartsApp from "./sections/ChartsApp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Hero() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: 294,
        marginTop:"1px"
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 3, borderColor: "divider" }}
      >
        <Tab icon={<StoreIcon/> } iconPosition="start" label={`Stores`} {...a11yProps(0)} />
        <Tab icon={<CategoryIcon />} iconPosition="start" label="SKU" {...a11yProps(1)} />
        <Tab icon={<LeaderboardIcon />} iconPosition="start" label="Planning" {...a11yProps(2)} />
        <Tab icon={<AssessmentIcon/>} iconPosition="start" label="charts" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Stores />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SKUApp />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Planning />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ChartsApp />
      </TabPanel>
    </Box>
  );
}
