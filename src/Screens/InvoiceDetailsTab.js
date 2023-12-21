import { React, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Card,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Stack,
  Button,
  createTheme,
  blue,
  yellow,
  red,
  Box,
  Modal,
} from "@mui/material";
import "../Screens/InvoiceDetailsTab.css";
import BasicModal from "./BasicModal";
import Collapsible from "react-collapsible";
import { BsCaretDown, BsCaretUpFill } from "react-icons/bs";
import IMAGES from "../Images/IMAGES";
import { IconContext } from "react-icons";
import Sheet from "@mui/joy/Sheet";

function InvoiceDetailsTab(props) {
  const isPC = window.innerWidth > 1024;

  const gridSize = isPC ? 6 : 12;

  console.log("jebdjdscjss", props.INVOICE_DETAILS);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [invoiceData, setInvoiceData] = useState({});
  // const [show, setShow] = useState(false);

  useEffect(() => {
    setInvoiceData(props.INVOICE_DETAILS.Invoice_Vendor_Details[0]);
    console.log(
      "ehfhdvhvdhgc",
      props.INVOICE_DETAILS.Invoice_Vendor_Details[0]
    );
  }, [props.INVOICE_DETAILS]);

  return (
    <>
      <div className="conatainer-background">
        <Typography
          sx={{
            //   color: COLORS.white,
            fontWeight: 700,
            fontSize: 17,
            p: 1,
            color: "#fff",
            backgroundColor: "#2d344b",
          }}
        >
          General
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={gridSize}>
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Case ID
              </Typography>
              <Typography className="typo-style">
                {invoiceData.CASE_ID}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Business Line
              </Typography>
              <Typography className="typo-style">
                {invoiceData.BUSINESS_LINE}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Plant
              </Typography>

              <Typography className="typo-style">
                {invoiceData.PLANT_CODE}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Department
              </Typography>
              <Typography className="typo-style">
                {invoiceData.DEPARTMENT}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Invoice Date
              </Typography>
              <Typography className="typo-style">
                {invoiceData.INVOICE_DATE}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                PO Number
              </Typography>
              <Typography className="typo-style">
                {invoiceData.PO_NUMBER}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Urgent
              </Typography>
              <Typography className="typo-style">
                {invoiceData.URGENCY}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Bill to Company Name
              </Typography>
              <Typography className="typo-style">
                {invoiceData.COMPANY_NAME}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Initiator's Email Address
              </Typography>
              <Typography className="typo-style">
                {invoiceData.KRC_EMAIL_ADDRESS}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Purchase Group
              </Typography>
              <Typography className="typo-style">
                {invoiceData.PURCHASE_GRP}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={gridSize}>
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Company Code
              </Typography>
              <Typography className="typo-style">
                {invoiceData.COMPANY_CODE}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Vendor Name
              </Typography>
              <Typography className="typo-style">
                {invoiceData.VENDOR_NAME}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Location
              </Typography>
              <Typography className="typo-style">
                {invoiceData.LOCATION}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Invoice Number
              </Typography>
              <Typography className="typo-style">
                {invoiceData.INVOICE_NUMBER}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Invoice Amount(inclusive of tax)
              </Typography>
              <Typography className="typo-style">
                {invoiceData.INVOICE_AMOUNT}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Invoice Receipt Date
              </Typography>
              <Typography className="typo-style">
                {invoiceData.INVOICE_DATE}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Bill to Company GSTIN
              </Typography>
              <Typography className="typo-style">
                {invoiceData.COMPANY_GSTIN}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Currency
              </Typography>
              <Typography className="typo-style">
                {invoiceData.CURRENCY}
              </Typography>
            </div>
            <Divider />
            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                Purchase Org
              </Typography>
              <Typography className="typo-style">
                {invoiceData.PURCHASE_ORG}
              </Typography>
            </div>
            <Divider />

            <div className="form-details">
              <Typography
                sx={{ color: "#595959", fontWeight: 600, fontSize: 17, p: 1 }}
              >
                MSME
              </Typography>
              <Typography className="typo-style">
                {invoiceData.MSME_STATUS}
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Collapsible
          trigger={
            <Card
              style={{
                display: "flex",
                justifyContent: "space-between",
                // padding: 2,
                backgroundColor: "#2d344b",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  //  padding: 2,
                  marginLeft: 10,
                }}
              >
                Invoice Details
              </p>

              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div
                  style={{
                    marginRight: 10,
                  }}
                >
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
            </Card>
          }
          triggerStyle={{
            color: "#2d344b",

            marginLeft: 20,
            marginRight: 20,
          }}
          triggerWhenOpen={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                // marginLeft: 20,
                // marginRight: 20,
                // padding: 10,
                backgroundColor: "#2d344b",
                alignItems: "center",
              }}
            >
              {/* <p>Other Details</p> */}
              <p
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  //  padding: 2,
                  marginLeft: 10,
                }}
              >
                Invoice Details
              </p>
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div
                  style={{
                    marginRight: 10,
                  }}
                >
                  <BsCaretUpFill />
                </div>
              </IconContext.Provider>
              {/* <p>
            
              </p> */}
            </div>
          }
        >
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              // maxWidth: 500,
              flexGrow: 1,
              backgroundColor: "#fff",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={gridSize}>
                {/* {val.ANSWERS} */}

                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Invoice Type
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.INVOICE_TYPE}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    CGST Amount
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.CGST_AMOUNT}
                  </Typography>
                </div>
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    SGST Amount
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.SGST_AMOUNT}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    IGST Amount
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.IGST_AMOUNT}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    PO Tax Code
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.PO_TAX_CODE}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Fiscal Year
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.FINANCIAL_YEAR}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    TCS Amount
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.TCS_AMOUNT}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Digital Sign
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.DIGITAL_SIGN}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    IRN Number
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.IRN_NUMBER}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Invoice Category
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.INVOICE_CATEGORY}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Section Code
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.SECTION_CODE}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={gridSize}>
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Derived Payment Date
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.PURCHASE_ORG}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Vendor Code
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.VENDOR_CODE}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Vendor GSTIN
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.VENDOR_GSTIN}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Vendor Email
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.VENDOR_EMAIL}
                  </Typography>
                </div>
                <Divider />

                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Vendor Address
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.VENDOR_ADDRESS}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Invoice Sub-Category
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.INVOICE_SUB_CATEGORY}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Invoice Classification
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.INVOICE_CLASSIFICATION}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Process
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.PROCESS}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    PO Type
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.SAP_PO_TYPE}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Invoice Source
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.SOURCE_OF_INVOICE}
                  </Typography>
                </div>
                <Divider />
                <div className="form-details">
                  <Typography
                    sx={{
                      color: "#595959",
                      fontWeight: 600,
                      fontSize: 17,
                      p: 1,
                    }}
                  >
                    Business Place
                  </Typography>
                  <Typography className="typo-style">
                    {invoiceData.BUSINESS_PLACE}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* 
          <div className="hr" /> */}
        </Collapsible>

        <div className="button_div">
          <div className="inner_div">
            <button
              className="button"
              onClick={() => {
                handleOpen();
              }}
            >
              Accept
            </button>
            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  fontWeight="lg"
                  mb={1}
                >
                  Are you Sure?
                </Typography>
                <TextField placeholder="Add comments" />
                <div className="modal-box">
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                  <button onClick={navigateToHome} className="modal-btn">
                    Yes
                  </button>
                </div>
              </Sheet>
            </Modal>
            <button
              className="button"
              onClick={() => {
                handleOpen();
              }}
            >
              Reject
            </button>
            {/* <button className="button">Release Work Item</button> */}
            {/* <button className="button">Save & Close</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceDetailsTab;
