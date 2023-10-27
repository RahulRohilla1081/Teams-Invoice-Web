import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import '../Screens/InvoiceDetails.css'
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Tab,
  Modal,
  TextField,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import InvoiceDetailsTab from "./InvoiceDetailsTab";
import { Attachment } from "@mui/icons-material";
import AttachmentTab from "./AttachmentTab";
import CommentsTab from "./CommentsTab";
import CaseRoutingTab from "./CaseRoutingTab";

function InvoiceDetails() {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [CommentsList, setCommentsList] = useState([
    {
      ADDED_BY: "Jack",
      Date: "19/10/2023",
      COMMENTS:"This is Jacks comment"
    },
    {
      ADDED_BY: "Tony",
      Date: "19/10/2023",
      COMMENTS:"This is Tony comment"

    },
    {
      ADDED_BY: "John",
      Date: "19/10/2023",
      COMMENTS:"This is John comment"

    },
  ]);
  const handleChange = (event, newValue) => {
    setValue(newValue);



   
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const location = useLocation();

  useEffect(() => {
    // console.log("location", location);
  }, []);

  return (
    <>
      <Box sx={{}}>
        <div className="header-style">
                     
       

        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
          
            <h2 className="main_heading nav-box" stickyHeader>Invoice Details</h2>
            <div>

            <button
            className="button"
            onClick={() => {
              handleOpen();
            }}
            >
            Comments
          </button>
          </div>

          <Modal className="modal-style"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Comments
            </Typography>

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

            {CommentsList.map((val) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                      }}
                    >
                      {val.ADDED_BY}
                    </p>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                      }}
                    >
                      {val.COMMENTS}
                    </p>
                    <p
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      {val.Date}
                    </p>
                  </div>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "gray",
                    }}
                  />
                </>
              );
            })}
          </Box>
        </Modal>

            </div>
          </div>
          <div className="main-header">
        <TabContext value={value}>
          <Box  className='nav-box' sx={{ borderBottom: 1, borderColor: "divider"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example"> 
              <Tab label="Invoice Data" value="1" />
              <Tab label="Attachments" value="2" />
              {/* <Tab label="Comments" value="3" /> */}
              <Tab label="Case Routing Details" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <InvoiceDetailsTab INVOICE_DETAILS={location.state.INVOICE_DATA} />
          </TabPanel>
          <TabPanel value="2">
            <AttachmentTab />
          </TabPanel>
          {/* <TabPanel value="3"><CommentsTab/></TabPanel> */}
          <TabPanel value="4">
            <CaseRoutingTab />
          </TabPanel>
        </TabContext>
        </div>
      </Box>
    </>
  );
}

export default InvoiceDetails;

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
