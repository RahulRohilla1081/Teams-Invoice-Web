
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./InvoiceList.css";

function CommentsTab() {
  const [CommentsList, setCommentsList] = useState([
    {
      ADDED_BY: "Rahul Rohilla",
      Date: "19/10/2023",
    },
  ]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField placeholder="Add comments" />
        <Button
          color="primary"
          variant="contained"
          sx={{
            ml: 2,
          }}
        >
          Add comments{" "}
        </Button>
      </div>

      <div>
        {CommentsList.map((val) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>{val.ADDED_BY}</p>
              <p
                style={{
                  marginLeft: 10,
                }}
              >
                {val.Date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentsTab;







// import React, { useEffect } from 'react'
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom'
// import { Grid, Paper, List, ListItem, ListItemText, Typography, Box,Tab, Tabs } from '@mui/material';
// import {TabContext,TabPanel,TabList} from '@mui/lab';
// import InvoiceDetailsTab from './InvoiceDetailsTab';
// import { Attachment } from '@mui/icons-material';
// import AttachmentTab from './AttachmentTab';
// import CaseRoutingTab from './CaseRoutingTab'

// function CommentsTab(props) {

//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CommentsTab.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//     >
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//       >
//         <Tab label="Invoice Data" {...a11yProps(0)} />
//         <Tab label="Attachments" {...a11yProps(1)} />
//         <Tab label="Comments" {...a11yProps(2)} />
//         <Tab label="Case Routing Details" {...a11yProps(3)} />
//       </Tabs>
//       <CommentsTab value={value} index={0}>
//       Invoice Data
//       </CommentsTab>
//       <CommentsTab value={value} index={1}>
//       Attachments
//       </CommentsTab>
//       <CommentsTab value={value} index={2}>
//       Comments
//       </CommentsTab>
//       <CommentsTab value={value} index={3}>
//       Case Routing Details
//       </CommentsTab>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Tab, Tabs, Box, Typography } from '@mui/material';
// import { useLocation } from 'react-router-dom'
// import AttachmentTab from './AttachmentTab';
// // import CommentsTab from './CommentsTab';
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
//         variant="scrollable"
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

// // 'use strict';
// //  var React = require('react'),
// //    Button = require('./button'),
// //    UnorderedList = require('./unordered-list');

// // class Dropdown extends React.Component{
// //   constructor(props) {
// //     super(props);
// //   }
// //   handleClick() {
// //     alert('I am click here');
// //   }

// //   render() {
// //     return (
// //       <div className="dropdown">
// //         // whenClicked is a property not an event, per se.
// //         <Button whenClicked={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"></Button>
// //         <UnorderedList />
// //       </div>
// //     )
// //   }
// // }

// // module.exports = Dropdown;
