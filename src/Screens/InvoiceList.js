import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Tooltip, IconButton, Typography, Menu, MenuIcon, Container, Avatar, Button, MenuItem, AdbIcon, Tab, Tabs, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import './InvoiceList.css'
import InvoiceDetails from './InvoiceDetails';
import { useNavigate } from 'react-router-dom';

function InvoiceList() {
    const navigate = useNavigate()

    const InvoiceHeader = [{
        Label: "Case ID"
    },
    {
        Label: "Invoice Type"
    },
    {
        Label: "Business Line"
    },
    {
        Label: "Company Code"
    },
    {
        Label: "Plant"
    },
    {
        Label: "Location"
    },
    {
        Label: "Department"
    },
    {
        Label: "Invoice Number"
    },
    {
        Label: "Invoice Date"
    },
    {
        Label: "Invoice Amount(inclusive of tax)"
    },
    {
        Label: "CGST Amount"
    },
    {
        Label: "SGST Amount"
    },
    {
        Label: "IGST Amount"
    },
    {
        Label: "PO Tax Code"
    },
    {
        Label: "Fiscal Year"
    },
    {
        Label: "TCS Amount"
    },
    {
        Label: "Digital Sign"
    },
    {
        Label: "IRN Number"
    },
    {
        Label: "Invoice Category"
    },
    {
        Label: "Invoice Sub-Category"
    },
    {
        Label: "Invoice Classification"
    },
    {
        Label: "Process"
    },
    {
        Label: "PO Number"
    },
    {
        Label: "PO Type"
    },
    {
        Label: "Invoice Source"
    },
    {
        Label: "Invoice Receipt Date"
    },
    {
        Label: "Urgent"
    },
    {
        Label: "Business Place"
    },
    {
        Label: "Section Code"
    },
    {
        Label: "Bill to Company GSTIN"
    },
    {
        Label: "Bill to Company Name"
    },
    {
        Label: "Currency"
    },
    {
        Label: "Initiator's Email Address"
    },
    {
        Label: "Purchase Org"
    },
    {
        Label: "Purchase Group"
    },
    {
        Label: "Derived Payment Date"
    },
    {
        Label: "Vendor Name"
    },
    {
        Label: "Vendor Code"
    },
    {
        Label: "Vendor GSTIN"
    },
    {
        Label: "MSME"
    },
    {
        Label: "Vendor Email"
    },
    {
        Label: "Vendor Address"
    }
    ]


    const InvoiceColumn = [
        {
            'Case ID': 'Case ID 1',
            'Invoice Type': 'PO 1',
            'Business Line': 'Commercial',
            'Company Code': '3150',
            'Plant': 'A270',
            'Location': 'Pune',
            'Department': 'IT-Infrastructure',
            'Invoice Number': 'INV/2/2023',
            'Invoice Date': '5/3/2023',
            'Invoice Amount(inclusive of tax)': 295,
            'CGST Amount': 225,
            'SGST Amount': 225,
            'IGST Amount': 0,
            'PO Tax Code': 'Payment Term Z045',
            'Fiscal Year': 2023,
            'TCS Amount': 0,
            'Digital Sign': 'No',
            'IRN Number': '79f3d3e9703303e7e7e9c27567a3cc167e0f9aa8d5c625b9eb10be3529aa6760',
            'Invoice Category': 'Domestic',
            'Invoice Sub-Category': 'Services',
            'Invoice Classification': 'Others',
            'Process': 'Goods Services+Delivery Cost',
            'PO Number': '4800167060',
            'PO Type': 'SB',
            'Invoice Source': 'Physical',
            'Invoice Receipt Date': '5/17/2023',
            'Urgent': 'Yes',
            'Business Place': '',
            'Section Code': 3151,
            'Bill to Company GSTIN': '27AABCF1169K1ZJ',
            'Bill to Company Name': 'Asterope Properties Private Limited',
            'Currency': 'INR',
            "Initiator's Email Address": 'nmane@kraheja.com',
            'Purchase Org': 'RPU1',
            'Purchase Group': 'P24',
            'Derived Payment Date': 'NA',
            'Vendor Name': 'ONEOTT INTERTAINMENT LTD',
            'Vendor Code': '127232',
            'Vendor GSTIN': '27AADCP6815A2ZO',
            'MSME': 'MH18F0034092',
            'Vendor Email': 'akshay.lasure@onebroadband.in',
            'Vendor Address': 'M/S.,ONEOTT,49/50, IN CENTRE,,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093'
        },
        {
            'Case ID': 'Case ID 2',
            'Invoice Type': 'PO 2',
            'Business Line': 'Commercial',
            'Company Code': '3150',
            'Plant': 'A270',
            'Location': 'Pune',
            'Department': 'IT-Infrastructure',
            'Invoice Number': 'INV/2/2023',
            'Invoice Date': '5/3/2023',
            'Invoice Amount(inclusive of tax)': 295,
            'CGST Amount': 225,
            'SGST Amount': 225,
            'IGST Amount': 0,
            'PO Tax Code': 'Payment Term Z045',
            'Fiscal Year': 2023,
            'TCS Amount': 0,
            'Digital Sign': 'No',
            'IRN Number': '79f3d3e9703303e7e7e9c27567a3cc167e0f9aa8d5c625b9eb10be3529aa6760',
            'Invoice Category': 'Domestic',
            'Invoice Sub-Category': 'Services',
            'Invoice Classification': 'Others',
            'Process': 'Goods Services+Delivery Cost',
            'PO Number': '4800167060',
            'PO Type': 'SB',
            'Invoice Source': 'Physical',
            'Invoice Receipt Date': '5/17/2023',
            'Urgent': 'Yes',
            'Business Place': '',
            'Section Code': 3151,
            'Bill to Company GSTIN': '27AABCF1169K1ZJ',
            'Bill to Company Name': 'Asterope Properties Private Limited',
            'Currency': 'INR',
            "Initiator's Email Address": 'nmane@kraheja.com',
            'Purchase Org': 'RPU1',
            'Purchase Group': 'P24',
            'Derived Payment Date': '',
            'Vendor Name': 'ONEOTT INTERTAINMENT LTD',
            'Vendor Code': '127232',
            'Vendor GSTIN': '27AADCP6815A2ZO',
            'MSME': 'MH18F0034092',
            'Vendor Email': 'akshay.lasure@onebroadband.in',
            'Vendor Address': 'M/S.,ONEOTT,49/50, IN CENTRE,,12TH ROAD MIDC,,ANDHERI (E),Mumbai,Maharashtra,IN,400093'
        }
    ]

    return (
        <>
            <div className='container'>
                <h2 className='main_heading'>Invoices</h2>
                <TableContainer component={Paper}>
                    <Table className='table' sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow className='main_row'>
                                {InvoiceHeader.map((val, index) => {
                                    return (
                                        <TableCell key={index} sx={{
                                            columnWidth:"100px",
                                        }} >
                                            <Typography className='heading'>
                                                {val.Label}
                                            </Typography>
                                        </TableCell>
                                    )
                                })}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {InvoiceColumn.map((row, rowIndex) => (
                                <TableRow className='col table_row' key={rowIndex}>

                                    <TableCell sx={{
                                            columnWidth:100,
                                        }} 
                                        key={rowIndex} onClick={() => {
                                        navigate('/invoice_details', {state:{
                                            INVOICE_DATA:row
                                        }})
                                    }}>
                                        <Typography className='heading' sx={{
                                            color: "#2c0c89",
                                            cursor: "pointer"
                                        }}
                                        >
                                            {row["Case ID"]}</Typography></TableCell>

                                    <TableCell key={rowIndex}>{row["Invoice Type"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Business Line"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Company Code"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Plant"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Location"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Department"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Number"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Date"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Amount(inclusive of tax)"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["CGST Amount"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["SGST Amount"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["IGST Amount"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["PO Tax Code"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Fiscal Year"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["TCS Amount"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Digital Sign"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["IRN Number"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Category"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Sub-Category"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Classification"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Process"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["PO Number"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["PO Type"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Source"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Invoice Receipt Date"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Urgent"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Business Place"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["section Code"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Bill to Company GSTIN"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Bill to Company Name"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Currency"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Initiator's Email Address"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Purchase Org"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Purchase Group"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Derived Payment Date"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Vendor Name"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Vendor Code"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Vendor GSTIN"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["MSME"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Vendor Email"]}</TableCell>
                                    <TableCell key={rowIndex}>{row["Vendor Address"]}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>

    );
}

export default InvoiceList