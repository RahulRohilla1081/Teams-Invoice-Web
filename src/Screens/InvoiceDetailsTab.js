import { Divider, Grid, TextField, Typography } from "@mui/material";
import { React, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { blue, yellow, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import "../Screens/InvoiceDetailsTab.css"
import BasicModal from "./BasicModal";
import Modal from "@mui/material/Modal";

function InvoiceDetailsTab(props) {

  const isPC = window.innerWidth > 1024; // You can adjust the width threshold

  // Determine the grid size
  const gridSize = isPC ? 6 : 12;


  console.log(props.INVOICE_DETAILS);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [CommentsList, setCommentsList] = useState([
    {
      ADDED_BY: "Jack",
      Date: "19/10/2023",
      Comment: "This is jack comment"
    },
    {
      ADDED_BY: "Tony",
      Date: "19/10/2023",
      Comment: "This is Tony comment"
    },
    {
      ADDED_BY: "John",
      Date: "19/10/2023",
      Comment: "This is John comment"
    },
  ]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {/* <div className="modal">
        <Button onClick={handleOpen} className='Modalbtn' variant="contained" color="success">
          Add Comments
        </Button>{ openModal && <BasicModal/>}
      </div> */}

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: 10,
          }}
        >
  
        </div>
        <Modal
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
                        marginLeft: 10,
                      }}
                    >
                      {val.ADDED_BY}
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

      <Typography
        sx={{
          //   color: COLORS.white,
          fontWeight: 700,
          fontSize: 20,
          p: 1,
          color: "#fff",
          backgroundColor: "#5a9cde",
        }}
      >
        General
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={gridSize}>
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Case ID
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Case ID"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Business Line
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Business Line"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Plant
            </Typography>

            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Plant"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Department
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Department"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Date
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Date"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              CGST Amount
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["CGST Amount"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography 
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              IGST Amount
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["IGST Amount"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Fiscal Year
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Fiscal Year"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Digital Sign
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Digital Sign"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Category
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Category"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Classification
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Classification"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              PO Number
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["PO Number"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Source
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Source"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Urgent
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Urgent"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Section Code
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Section Code"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Bill to Company Name
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Bill to Company Name"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Initiator's Email Address
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Initiator's Email Address"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Purchase Group
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Purchase Group"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Vendor Name
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Vendor Name"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Vendor GSTIN
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Vendor GSTIN"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Vendor Email
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Vendor Email"]}
            </Typography>
          </div>
        </Grid>





        <Grid item xs={gridSize}>
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Type
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Type"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Company Code
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Company Code"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Location
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Location"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Number
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Number"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Amount(inclusive of tax)
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Amount(inclusive of tax)"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              SGST Amount
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["SGST Amount"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              PO Tax Code
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["PO Tax Code"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              TCS Amount
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["TCS Amount"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              IRN Number
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1}}
            >
              {props.INVOICE_DETAILS["IRN Number"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Sub-Category
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Sub-Category"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Process
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Process"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              PO Type
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["PO Type"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Invoice Receipt Date
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Invoice Receipt Date"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Business Place
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Business Place"]},
              {props.INVOICE_DETAILS["Invoice Receipt Date"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Bill to Company GSTIN
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Bill to Company GSTIN"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Currency
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Currency"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography 
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Purchase Org
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Purchase Org"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Derived Payment Date
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Purchase Org"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Vendor Code
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Vendor Code"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              MSME
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["MSME"]}
            </Typography>
          </div>
          <Divider />
          <div className="form-details">
            <Typography
              sx={{ color: "#595959", fontWeight: 600, fontSize: 20, p: 1 }}
            >
              Vendor Address
            </Typography>
            <Typography className="typo-style"
              sx={{ color: "#595959", fontWeight: 200, fontSize: 15, p: 1 }}
            >
              {props.INVOICE_DETAILS["Vendor Address"]}
            </Typography>
            <Divider />
          </div>
        </Grid>
      </Grid>
      <div className="button_div">
        <div className="inner_div">
          <button className="button">Aceept</button>
          <button className="button">Hold</button>
          <button className="button">Reject</button>
          {/* <button className="button">Release Work Item</button> */}
          {/* <button className="button">Save & Close</button> */}
        </div>
      </div>
    </>
  );
}

export default InvoiceDetailsTab;
