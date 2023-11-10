import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  Container,
  Avatar,
  Button,
  MenuItem,
  AdbIcon,
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
// import td, { tdClasses } from '@mui/material/td';
import "./InvoiceList.css";
import InvoiceDetails from "./InvoiceDetails";
import { useNavigate } from "react-router-dom";

function InvoiceList() {
  const navigate = useNavigate();

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

  const InvoiceColumn = [
    {
      "Case ID": "Case ID 1",
      "Invoice Type": "PO 1",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c2756",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "NA",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3cc1",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3c",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3c",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,,12TH ROAD MIDC,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3cc1",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,,12TH ROAD MIDC,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3cc167",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3cc167e0f9",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
    {
      "Case ID": "Case ID 2",
      "Invoice Type": "PO 2",
      "Business Line": "Commercial",
      "Company Code": "3150",
      Plant: "A270",
      Location: "Pune",
      Department: "IT-Infrastructure",
      "Invoice Number": "INV/2/2023",
      "Invoice Date": "5/3/2023",
      "Invoice Amount(inclusive of tax)": 295,
      "CGST Amount": 225,
      "SGST Amount": 225,
      "IGST Amount": 0,
      "PO Tax Code": "Payment Term Z045",
      "Fiscal Year": 2023,
      "TCS Amount": 0,
      "Digital Sign": "No",
      "IRN Number":
        "79f3d3e9703303e7e7e9c27567a3cc167",
      "Invoice Category": "Domestic",
      "Invoice Sub-Category": "Services",
      "Invoice Classification": "Others",
      Process: "Goods Services+Delivery Cost",
      "PO Number": "4800167060",
      "PO Type": "SB",
      "Invoice Source": "Physical",
      "Invoice Receipt Date": "5/17/2023",
      Urgent: "Yes",
      "Business Place": "",
      "Section Code": 3151,
      "Bill to Company GSTIN": "27AABCF1169K1ZJ",
      "Bill to Company Name": "Asterope Properties Private Limited",
      Currency: "INR",
      "Initiator's Email Address": "nmane@kraheja.com",
      "Purchase Org": "RPU1",
      "Purchase Group": "P24",
      "Derived Payment Date": "",
      "Vendor Name": "ONEOTT INTERTAINMENT LTD",
      "Vendor Code": "127232",
      "Vendor GSTIN": "27AADCP6815A2ZO",
      MSME: "MH18F0034092",
      "Vendor Email": "akshay.lasure@onebroadband.in",
      "Vendor Address":
        "M/S.,ONEOTT,49/50, IN CENTRE,,12TH ROAD MIDC,ANDHERI (E),Mumbai,Maharashtra,IN,400093",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="header-style">
          <h2 className="main_heading">Invoices</h2>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 490,
          }}
        >
          <Table className="table" aria-label="customized table" stickyHeader>
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
                      <Typography className="heading">{val.Label}</Typography>
                    </th>
                  );
                })}
              </tr>
            </TableHead>

            <TableBody>
              {InvoiceColumn.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td
                    key={rowIndex}
                    onClick={() => {
                      navigate("/invoice_details", {
                        state: {
                          INVOICE_DATA: row,
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
                      {row["Case ID"]}
                    </Typography>
                  </td>

                  {/* <td key={rowIndex}>{row["Invoice Type"]}</td> */}
                  <td key={rowIndex}>{row["Business Line"]}</td>
                  <td key={rowIndex}>{row["Company Code"]}</td>
                  <td key={rowIndex}>{row["Plant"]}</td>
                  <td key={rowIndex}>{row["Location"]}</td>
                  <td key={rowIndex}>{row["Department"]}</td>
                  <td key={rowIndex}>{row["Invoice Number"]}</td>
                  <td key={rowIndex}>{row["Invoice Date"]}</td>
                  <td key={rowIndex}>
                    {row["Invoice Amount(inclusive of tax)"]}
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
                  <td key={rowIndex}>{row["PO Number"]}</td>
                  {/* <td key={rowIndex}>{row["PO Type"]}</td>
                                    <td key={rowIndex}>{row["Invoice Source"]}</td> */}
                  <td key={rowIndex}>{row["Invoice Receipt Date"]}</td>
                  <td key={rowIndex}>{row["Urgent"]}</td>
                  {/* <td key={rowIndex}>{row["Business Place"]}</td>
                                    <td key={rowIndex}>{row["section Code"]}</td>
                                    <td key={rowIndex}>{row["Bill to Company GSTIN"]}</td> */}
                  <td key={rowIndex}>{row["Bill to Company Name"]}</td>
                  {/* <td key={rowIndex}>{row["Currency"]}</td>
                                    <td key={rowIndex}>{row["Initiator's Email Address"]}</td>
                                    <td key={rowIndex}>{row["Purchase Org"]}</td>
                                    <td key={rowIndex}>{row["Purchase Group"]}</td>
                                    <td key={rowIndex}>{row["Derived Payment Date"]}</td> */}
                  <td key={rowIndex}>{row["Vendor Name"]}</td>
                  {/* <td key={rowIndex}>{row["Vendor Code"]}</td> */}
                  {/* <td key={rowIndex}>{row["Vendor GSTIN"]}</td> */}
                  <td key={rowIndex}>{row["MSME"]}</td>
                  {/* <td key={rowIndex}>{row["Vendor Email"]}</td>
                                    <td key={rowIndex}>{row["Vendor Address"]}</td> */}
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default InvoiceList;
