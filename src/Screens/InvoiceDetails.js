import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import TabContext from '@mui/lab/TabContext';
import { Grid, Paper, List, ListItem, ListItemText, Typography, Box,Tab  } from '@mui/material';

// import Tab from '@mui/material/Tab';
import {TabContext,TabPanel,TabList} from '@mui/lab';
import InvoiceDetailsTab from './InvoiceDetailsTab';
import { Attachment } from '@mui/icons-material';
import AttachmentTab from './AttachmentTab';
import CommentsTab from './CommentsTab';
import CaseRoutingTab from './CaseRoutingTab'

function InvoiceDetails() {

  const [value, setValue] = React.useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation()

  useEffect(() => {
    // console.log("location", location);
  }, [])
   // <p>{location.state.INVOICE_DATA["Invoice Type"]}</p>
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Invoice Data" value="1" />
              <Tab label="Attachments" value="2" />
              <Tab label="Comments" value="3" />
              <Tab label="Case Routing Details" value="4" />
              
            </TabList>
          </Box>
          <TabPanel value="1"><InvoiceDetailsTab INVOICE_DETAILS={location.state.INVOICE_DATA}/></TabPanel>
          <TabPanel value="2"><AttachmentTab/></TabPanel>
          <TabPanel value="3"><CommentsTab/></TabPanel>
          <TabPanel value="4"><CaseRoutingTab/></TabPanel>
        </TabContext>
      </Box>
    );
}

export default InvoiceDetails