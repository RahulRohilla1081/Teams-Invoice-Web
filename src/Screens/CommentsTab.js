import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { useLocation } from 'react-router-dom'
// import TabContext from '@mui/lab/TabContext';
import { Grid, Paper, List, ListItem, ListItemText, Typography, Box,Tab  } from '@mui/material';

// import Tab from '@mui/material/Tab';
import {TabContext,TabPanel,TabList} from '@mui/lab';
import InvoiceDetailsTab from './InvoiceDetailsTab';
import { Attachment } from '@mui/icons-material';
import AttachmentTab from './AttachmentTab';
import CaseRoutingTab from './CaseRoutingTab'

function CommentsTab(props) {
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

CommentsTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <CommentsTab value={value} index={0}>
        Item One
      </CommentsTab>
      <CommentsTab value={value} index={1}>
        Item Two
      </CommentsTab>
      <CommentsTab value={value} index={2}>
        Item Three
      </CommentsTab>
      <CommentsTab value={value} index={3}>
        Item Four
      </CommentsTab>
      <CommentsTab value={value} index={4}>
        Item Five
      </CommentsTab>
      <CommentsTab value={value} index={5}>
        Item Six
      </CommentsTab>
      <CommentsTab value={value} index={6}>
        Item Seven
      </CommentsTab>
    </Box>
  );
}