import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../Screens/InvoiceDetails.css";
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
import IMAGES from "../Images/IMAGES";

function InvoiceDetails(props) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [CommentsList, setCommentsList] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);  
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const location = useLocation();

  useEffect(() => {
    // console.log("location", location);
    console.log("njsad",location.state.INVOICE_DATA.Comments
    );
    setCommentsList(location.state.INVOICE_DATA.Comments)
  }, []);

  return (
    <>
      <Box>
        <div className="header-style">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={IMAGES.BackIcon}
                style={{
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  marginRight: 10,
                }}
                onClick={() => {
                  navigate("/");
                }}
              />

              <h2 className="main_heading nav-box" stickyHeader>
                Invoice Details
              </h2>
            </div>

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

            <Modal
              className="modal-style"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="comment-box-style">
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
                          {val.Comments}
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
            <Box
              className="nav-box"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                className="tab-list"
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
              >
                <Tab label="Invoice Data" value="1" />
                <Tab label="Attachments" value="2" />
                {/* <Tab label="Comments" value="3" /> */}
                <Tab label="Case Routing Details" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <InvoiceDetailsTab
                INVOICE_DETAILS={location.state.INVOICE_DATA}
              />
            </TabPanel>
            <TabPanel value="2">
              <AttachmentTab INVOICE_DETAILS={location.state.INVOICE_DATA}/>
            </TabPanel>
            {/* <TabPanel value="3"><CommentsTab/></TabPanel> */}
            <TabPanel value="4">
              <CaseRoutingTab INVOICE_DETAILS={location.state.INVOICE_DATA}/>
            </TabPanel>
          </TabContext>
        </div>
      </Box>
    </>
  );
}

export default InvoiceDetails;
