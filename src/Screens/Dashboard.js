import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "./InvoiceList.css";
import InvoiceDetails from "./InvoiceDetails";
import { useNavigate } from "react-router-dom";
import { app, authentication, initialize } from "@microsoft/teams-js";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Sheet from "@mui/joy/Sheet";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import dashboard from "../Images/dashboard.png";
import inbox from "../Images/inbox.png";
import { format } from 'date-fns';
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
  Divider,
  Card,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tabs,
  Table,
  TableBody,
  TableContainer,
  th,
  tr,
  TableHead,
  TableRow,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";

function Dashboard() {
  const navigate = useNavigate();
  const [tbody, settbody] = useState([]);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'grant_type' :'client_credentials',
      "scope" : "https://graph.microsoft.com/.default",
      "client_id": "233a2dbb-1b12-450a-a0c9-e15ccf17c997",
      "client_secret": "LTg8Q~Y9WmPFhRqIf-zYn7fRZfc.JUYVutQdZdgj"
    }
  }

  useEffect(() => {
    const FormData = require("form-data");
    let authData = new FormData();
    authData.append("grant_type", "client_credentials");
    authData.append("scope", "https://graph.microsoft.com/.default");
    authData.append("client_id", "233a2dbb-1b12-450a-a0c9-e15ccf17c997");
    authData.append("client_secret", "LTg8Q~Y9WmPFhRqIf-zYn7fRZfc.JUYVutQdZdgj");

    axios
      .post(
        "https://login.microsoftonline.com/4a65d39e-b3a8-402e-86b0-c1316ba372ba/oauth2/v2.0/token",
        config
      )
      .then((response) => {
        console.log("hsgdfjasfjf", response.data);
      })
      .catch((error) => {
        console.log("errorrrrrrr", error);
      });
  }, []);


  const formatDate = (currentDate) => {
    return (currentDate.toISOString().replace("T", " ").substring(0, 23));
  };

  console.log("isdfidshhfdsh", formatDate(new Date()));

  console.log ("dateiehfitugir", format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS'))

  // console.log("date new", formatDate);

  // const currentDate = new Date();
  // console.log("date", currentDate);

  // const formattedDate = currentDate.toISOString().replace('T', ' ').substring(0, 23);
  // console.log("newDatee", formattedDate);

  useEffect(() => {
    axios
      .get("https://timesheet.samishti.com:7001/apis/sampleDataKRC")
      .then((res) => {
        console.log("My Data:", res.data);
        settbody(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const InvoiceHeader = [
    {
      Label: "Case ID",
    },
    // {
    //   Label: "Invoice Type",
    // },
    {
      Label: "Business Line",
    },
    {
      Label: "Company Code",
    },
    {
      Label: "Plant",
    },
    {
      Label: "Location",
    },
    {
      Label: "Department",
    },
    {
      Label: "Invoice Number",
    },
    {
      Label: "Invoice Date",
    },
    {
      Label: "Invoice Amount",
    },
    // {
    //   Label: "CGST Amount",
    // },
    // {
    //   Label: "SGST Amount",
    // },
    // {
    //     Label: "IGST Amount"
    // },
    // {
    //     Label: "PO Tax Code"
    // },
    // {
    //     Label: "Fiscal Year"
    // },
    // {
    //     Label: "TCS Amount"
    // },
    // {
    //     Label: "Digital Sign"
    // },
    // {
    //     Label: "IRN Number"
    // },
    // {
    //     Label: "Invoice Category"
    // },
    // {
    //     Label: "Invoice Sub-Category"
    // },
    // {
    //     Label: "Invoice Classification"
    // },
    // {
    //     Label: "Process"
    // },
    {
      Label: "PO Number",
    },
    // {
    //     Label: "PO Type"
    // },
    // {
    //     Label: "Invoice Source"
    // },
    {
      Label: "Invoice Receipt Date",
    },
    {
      Label: "Urgent",
    },
    // {
    //     Label: "Business Place"
    // },
    // {
    //     Label: "Section Code"
    // },
    // {
    //     Label: "Bill to Company GSTIN"
    // },
    {
      Label: "Bill to Company Name",
    },
    // {
    //     Label: "Currency"
    // },
    // {
    //     Label: "Initiator's Email Address"
    // },
    // {
    //     Label: "Purchase Org"
    // },
    // {
    //     Label: "Purchase Group"
    // },
    // {
    //     Label: "Derived Payment Date"
    // },
    {
      Label: "Vendor Name",
    },
    // {
    //     Label: "Vendor Code"
    // },
    // {
    //     Label: "Vendor GSTIN"
    // },
    {
      Label: "MSME",
    },
    // {
    //     Label: "Vendor Email"
    // },
    // {
    //     Label: "Vendor Address"
    // }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-sub-container">
        <img
          style={{
            width: "35 px",
            height: "30px",
            margin: "10",
            padding: "5px",
            paddingLeft: "10px",
          }}
          src={dashboard}
        ></img>
        <h2
          style={{
            paddingLeft: "5px",
          }}
        >
          Dashboard
        </h2>
      </div>
      <div className="left-container">
        <div className="sub-left-container">
          <Card className="card-1">
            <CardContent>
              <Typography className="card-content">Total Inbox</Typography>

              <div className="card-design">
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  src={inbox}
                />
                <h2>20</h2>
              </div>
            </CardContent>
          </Card>

          <Card className="card-2">
            <CardContent>
              <Typography className="card-content">
                Total Query Inbox
              </Typography>
              <div className="card-design">
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  src={inbox}
                />
                <h2>20</h2>
              </div>
            </CardContent>
          </Card>
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
                <Tab label="Total Inbox Table" value="1" />
                <Tab label="Query Inbox Table" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <h2 className="main_heading">Inbox Invoices</h2>
              <Divider
                sx={{
                  color: "white",
                }}
              />
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: 350,
                  minHeight: 350,
                }}
              >
                <Table
                  className="table"
                  aria-label="customized table"
                  stickyHeader
                >
                  <TableHead className="scroll-effect">
                    <tr>
                      {InvoiceHeader.map((val, index) => {
                        return (
                          <th
                            key={index}
                            sx={{
                              columnWidth: "100%",
                              color: "#2d344b",
                            }}
                          >
                            <Typography className="heading">
                              {val.Label}
                            </Typography>
                          </th>
                        );
                      })}
                    </tr>
                  </TableHead>

                  <TableBody>
                    {tbody.map((val, index) => (
                      <tr key={index}>
                        <td
                          key={index}
                          onClick={() => {
                            navigate("/invoice_details", {
                              state: {
                                INVOICE_DATA: val,
                              },
                            });
                          }}
                        >
                          <Typography
                            className="heading"
                            sx={{
                              color: "#219de1",
                              cursor: "pointer",
                            }}
                          >
                            {val?.Invoice_Vendor_Details[0]?.CASE_ID}
                          </Typography>
                        </td>

                        {/* <td key={rowIndex}>{row["Invoice Type"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.BUSINESS_LINE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.COMPANY_CODE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.PLANT}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.LOCATION}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.DEPARTMENT}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_NUMBER}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_DATE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_AMOUNT}
                        </td>
                        {/* <td key={rowIndex}>{row["CGST Amount"]}</td>
                  <td key={rowIndex}>{row["SGST Amount"]}</td>
                  <td key={rowIndex}>{row["IGST Amount"]}</td> */}
                        {/* <td key={rowIndex}>{row["PO Tax Code"]}</td>
                                    <td key={rowIndex}>{row["Fiscal Year"]}</td>
                                    <td key={rowIndex}>{row["TCS Amount"]}</td>
                                    <td key={rowIndex}>{row["Digital Sign"]}</td>
                                    <td key={rowIndex}>{row["IRN Number"]}</td>
                                    <td key={rowIndex}>{row["Invoice Category"]}</td>
                                    <td key={rowIndex}>{row["Invoice Sub-Category"]}</td>
                                    <td key={rowIndex}>{row["Invoice Classification"]}</td>
                                    <td key={rowIndex}>{row["Process"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.PO_NUMBER}
                        </td>
                        {/* <td key={rowIndex}>{row["PO Type"]}</td>
                                    <td key={rowIndex}>{row["Invoice Source"]}</td> */}
                        <td key={index}>
                          {
                            val?.Invoice_Vendor_Details[0]
                              ?.INVOICE_RECEVIED_DATE
                          }
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.URGENCY}
                        </td>
                        {/* <td key={rowIndex}>{row["Business Place"]}</td>
                                    <td key={rowIndex}>{row["section Code"]}</td>
                                    <td key={rowIndex}>{row["Bill to Company GSTIN"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.COMPANY_NAME}
                        </td>
                        {/* <td key={rowIndex}>{row["Currency"]}</td>
                                    <td key={rowIndex}>{row["Initiator's Email Address"]}</td>
                                    <td key={rowIndex}>{row["Purchase Org"]}</td>
                                    <td key={rowIndex}>{row["Purchase Group"]}</td>
                                    <td key={rowIndex}>{row["Derived Payment Date"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.VENDOR_NAME}
                        </td>
                        {/* <td key={rowIndex}>{row["Vendor Code"]}</td> */}
                        {/* <td key={rowIndex}>{row["Vendor GSTIN"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.MSME_STATUS}
                        </td>
                        {/* <td key={rowIndex}>{row["Vendor Email"]}</td>
                                    <td key={rowIndex}>{row["Vendor Address"]}</td> */}
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel value="2">
              <h2 className="main_heading">Query Inbox Invoices</h2>
              <Divider
                sx={{
                  color: "white",
                }}
              />
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: 350,
                  minHeight: 350,
                }}
              >
                <Table
                  className="table"
                  aria-label="customized table"
                  stickyHeader
                >
                  <TableHead className="scroll-effect">
                    <tr>
                      {InvoiceHeader.map((val, index) => {
                        return (
                          <th
                            key={index}
                            sx={{
                              columnWidth: "100%",
                              color: "#2d344b",
                            }}
                          >
                            <Typography className="heading">
                              {val.Label}
                            </Typography>
                          </th>
                        );
                      })}
                    </tr>
                  </TableHead>

                  <TableBody>
                    {tbody.map((val, index) => (
                      <tr key={index}>
                        <td
                          key={index}
                          onClick={() => {
                            navigate("/invoice_details", {
                              state: {
                                INVOICE_DATA: val,
                              },
                            });
                          }}
                        >
                          <Typography
                            className="heading"
                            sx={{
                              color: "#219de1",
                              cursor: "pointer",
                            }}
                          >
                            {val?.Invoice_Vendor_Details[0]?.CASE_ID}
                          </Typography>
                        </td>

                        {/* <td key={rowIndex}>{row["Invoice Type"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.BUSINESS_LINE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.COMPANY_CODE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.PLANT}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.LOCATION}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.DEPARTMENT}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_NUMBER}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_DATE}
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.INVOICE_AMOUNT}
                        </td>
                        {/* <td key={rowIndex}>{row["CGST Amount"]}</td>
                  <td key={rowIndex}>{row["SGST Amount"]}</td>
                  <td key={rowIndex}>{row["IGST Amount"]}</td> */}
                        {/* <td key={rowIndex}>{row["PO Tax Code"]}</td>
                                    <td key={rowIndex}>{row["Fiscal Year"]}</td>
                                    <td key={rowIndex}>{row["TCS Amount"]}</td>
                                    <td key={rowIndex}>{row["Digital Sign"]}</td>
                                    <td key={rowIndex}>{row["IRN Number"]}</td>
                                    <td key={rowIndex}>{row["Invoice Category"]}</td>
                                    <td key={rowIndex}>{row["Invoice Sub-Category"]}</td>
                                    <td key={rowIndex}>{row["Invoice Classification"]}</td>
                                    <td key={rowIndex}>{row["Process"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.PO_NUMBER}
                        </td>
                        {/* <td key={rowIndex}>{row["PO Type"]}</td>
                                    <td key={rowIndex}>{row["Invoice Source"]}</td> */}
                        <td key={index}>
                          {
                            val?.Invoice_Vendor_Details[0]
                              ?.INVOICE_RECEVIED_DATE
                          }
                        </td>
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.URGENCY}
                        </td>
                        {/* <td key={rowIndex}>{row["Business Place"]}</td>
                                    <td key={rowIndex}>{row["section Code"]}</td>
                                    <td key={rowIndex}>{row["Bill to Company GSTIN"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.COMPANY_NAME}
                        </td>
                        {/* <td key={rowIndex}>{row["Currency"]}</td>
                                    <td key={rowIndex}>{row["Initiator's Email Address"]}</td>
                                    <td key={rowIndex}>{row["Purchase Org"]}</td>
                                    <td key={rowIndex}>{row["Purchase Group"]}</td>
                                    <td key={rowIndex}>{row["Derived Payment Date"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.VENDOR_NAME}
                        </td>
                        {/* <td key={rowIndex}>{row["Vendor Code"]}</td> */}
                        {/* <td key={rowIndex}>{row["Vendor GSTIN"]}</td> */}
                        <td key={index}>
                          {val?.Invoice_Vendor_Details[0]?.MSME_STATUS}
                        </td>
                        {/* <td key={rowIndex}>{row["Vendor Email"]}</td>
                                    <td key={rowIndex}>{row["Vendor Address"]}</td> */}
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <AttachmentTab INVOICE_DETAILS={location.state.INVOICE_DATA}/> */}
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
