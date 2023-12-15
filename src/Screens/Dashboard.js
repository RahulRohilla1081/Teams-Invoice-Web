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
import inorbitimg from "../Images/inorbit.png";
import {
  Divider,
  Card,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableContainer,
  th,
  tr,
  Paper,
  TableHead,
  TableRow,
} from "@mui/material";

function Dashboard() {
  const navigate = useNavigate();

  const [tbody, settbody] = useState([]);

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
      <Typography
          sx={{
            //   color: COLORS.white,
            fontWeight: 700,
            fontSize: 22,
            p: 2,
            color: "#ffff",
            backgroundColor: "#29344c",
          }}
        >
          Dashboard
        </Typography>
       {/* <h2 className="main_heading">Dashboard</h2> */}
      <div className="sub-container">
        <div className="left-container">
          <div className="sub-left-container">
            <Card className="card-1">
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, textAlign: "center", color:"#fff", fontWeight:'fontWeightMedium'}}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Inbox
                </Typography>
                <Typography
                 sx={{ fontSize: 35, textAlign: "center", color:"#fff"}}
                variant="h4" component="div">
                  20
                </Typography>
              </CardContent>
            </Card>

            <Card className="card-2">
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, textAlign: "center",  color:"#fff", fontWeight:'fontWeightMedium' }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Query Inbox
                </Typography>
                <Typography 
                 sx={{ fontSize: 35, textAlign: "center",  color:"#fff" }}
                variant="h5" component="div">
                  20
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Card className="right-container-card">
            <>
              <div className="invoice-list-container-1">
                  <h2 className="main_heading">Inbox Invoices</h2>
                  <Divider sx={{
                    color: "white"
                  }}/>
                <TableContainer
                  component={Paper}
                  sx={{
                    maxHeight: 350,
                    minHeight: 350
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
              </div>
            </>
          </Card>
        </div>

        <div className="right-container">
          <Card className="right-container-card">
            <>
              <div className="invoice-list-container-2">
                  <h2 className="main_heading"> Query Inbox Invoices</h2>
                  <Divider sx={{
                    color: "white"
                  }}/>
                <TableContainer
                  component={Paper}
                  sx={{
                    maxHeight: 458,
                    minHeight: 458,
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
                                columnWidth: "100px",
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
              </div>
            </>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
