import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { blue, yellow, red } from '@mui/material/colors';
import './InvoiceList.css'


// const theme = createTheme({
//     palette: {
//         // primary: blue,
//         // secondary: '#110840',
//     },
// });

function InvoiceDetailsTab(props) {

    console.log(props.INVOICE_DETAILS);

    return (
        <>
            <Typography
                sx={{
                    //   color: COLORS.white,
                    fontWeight: 700,
                    fontSize: 20,
                    p: 1,
                    color: "#fff",
                    backgroundColor: "#0e0942",
                }}
            >
                General
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={6} >
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Case ID
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Case ID']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Business Line
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Business Line']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Plant
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Plant']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Department
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Department']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Date
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Date']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        CGST Amount
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['CGST Amount']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        IGST Amount
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['IGST Amount']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Fiscal Year
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Fiscal Year']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Digital Sign
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Digital Sign']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Category
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Category']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Classification
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Classification']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        PO Number
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['PO Number']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Source
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Source']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Urgent
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Urgent']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Section Code
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Section Code']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Bill to Company Name
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Bill to Company Name']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Initiator's Email Address
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS["Initiator's Email Address"]}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Purchase Group
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Purchase Group']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Vendor Name
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Vendor Name']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Vendor GSTIN
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Vendor GSTIN']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Vendor Email
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Vendor Email']}
                    </Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Type
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Type']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Company Code
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Company Code']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Location
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Location']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Number
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Number']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Amount(inclusive of tax)
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Amount(inclusive of tax)']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        SGST Amount
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['SGST Amount']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        PO Tax Code
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['PO Tax Code']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        TCS Amount
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['TCS Amount']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        IRN Number
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['IRN Number']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Sub-Category
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Sub-Category']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Process
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Process']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        PO Type
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['PO Type']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Invoice Receipt Date
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Invoice Receipt Date']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Business Place
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Business Place']},{props.INVOICE_DETAILS['Invoice Receipt Date']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Bill to Company GSTIN
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Bill to Company GSTIN']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Currency
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Currency']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Purchase Org
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Purchase Org']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Derived Payment Date
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Purchase Org']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Vendor Code
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Vendor Code']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        MSME
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['MSME']}
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
                    >
                        Vendor Address
                    </Typography>
                    <Typography
                        sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
                    >
                        {props.INVOICE_DETAILS['Vendor Address']}
                    </Typography>
                </Grid>
            </Grid>
            <div className='button_div'>
                <div className='inner_div'>
                    <button className='button'>Aceept</button>
                    <button className='button'>Reject</button>
                </div>
                <div className='inner_div'>
                    <button className='button'>Save</button>
                    <button className='button'>Close</button>
                </div>
            </div>


        </>


    )
}

export default InvoiceDetailsTab