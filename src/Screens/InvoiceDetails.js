import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Grid, Paper, List, ListItem, ListItemText, Typography, Box,Tab, Modal  } from '@mui/material';
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
      <Box sx={{}}>
        
        <div className='header-style'>

<h2 className='main_heading'>Invoice Details</h2>
</div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Invoice Data" value="1" />
              <Tab label="Attachments" value="2" />
              {/* <Tab label="Comments" value="3" /> */}
              <Tab label="Case Routing Details" value="4" />
              
            </TabList>
          </Box>
          <TabPanel value="1"><InvoiceDetailsTab INVOICE_DETAILS={location.state.INVOICE_DATA}/></TabPanel>
          <TabPanel value="2"><AttachmentTab/></TabPanel>
          {/* <TabPanel value="3"><CommentsTab/></TabPanel> */}
          <TabPanel value="4"><CaseRoutingTab/></TabPanel>
        </TabContext>
      </Box>
    );
}

export default InvoiceDetails

// import React, { useState, useEffect } from 'react';
// import { Tab, Tabs, Box, Typography } from '@mui/material';
// import { useLocation } from 'react-router-dom'
// import AttachmentTab from './AttachmentTab';
// import CommentsTab from './CommentsTab';
// import CaseRoutingTab from './CaseRoutingTab'
// import InvoiceDetailsTab from './InvoiceDetailsTab';


// export default function VerticalTabs() {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const location = useLocation()

//   useEffect(() => {
//     // console.log("location", location);
//   }, [])


//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//     >
//       <Tabs
//         orientation="vertical"
//         // variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//       >
//         <Tab label="Invoice Data" />
//         <Tab label="Attachments" />
//         <Tab label="Comments" />
//         <Tab label="Case Routing Details" />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//       <InvoiceDetailsTab INVOICE_DETAILS={location.state.INVOICE_DATA}/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <AttachmentTab/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Comments
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//       <CaseRoutingTab/>
//       </TabPanel>
//     </Box>
//   );
// }

// function TabPanel(props) {
//   const { children, value, index } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
