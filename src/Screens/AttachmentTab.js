import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { Viewer } from "@react-pdf-viewer/core";
import SamplePDF from "../Images/sample.pdf";
import Card from "@mui/material/Card";
import "../Screens/AttachmentTab.css";
import PDFViewer from "./PDFViewer";
// const base64 = require('')/;
// import {base64WithoutPrefix} from "base64topdf"

// Import the styles
// import "@react-pdf-viewer/core/lib/styles/index.css";

function AttachmentTab(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [showPDF, setShowPDF] = useState(false);


  const [pdfData,setpdfData]=useState({})

  useEffect(()=>{

    setpdfData(props.INVOICE_DETAILS.InvoiceDoc_Base64)
     console.log("ijfidfifdihihrif", props.INVOICE_DETAILS.InvoiceDoc_Base64);

  },[props.INVOICE_DETAILS]
  )


  console.log("ksdgfdsgfugds", props);

  const FilesArr = [
    { id: 1, FILE_NAME: "PDF 1", URL: "http://10.5.51.41:9000/sample.pdf" },
   
  ];
  const [SelectedFileURL, setSelectedFileURL] = useState({});

  useEffect(() => {
    setSelectedFileURL(FilesArr[0].URL);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="attach-main-container">
        <div
          className="card-class"
          style={{
            cursor: "pointer",
          }}
        >
          <div className="scrollmenu">
            {FilesArr.map((val) => (
              <div
                key={val.id}
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor:
                    SelectedFileURL == val.URL ? "#4775ce" : null,
                }}
                className="scrollmenu-item"
                onClick={() => {
                  setSelectedFileURL(val.URL);
                }}
              >
                <p
                  style={{
                    color: SelectedFileURL == val.URL ? "white" : "black",
                  }}
                >
                  {val.FILE_NAME}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height:"100vh"
          }}
        >
     
          <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        // height: '100%',
    }}
>
<iframe   style={{
        width:'100%',
        // height: '100%',
        height:"100vh"
    }}
   src={`data:application/pdf;base64,${
    props.INVOICE_DETAILS.InvoiceDoc_Base64
   }`}
 />



</div>
        </div>
      </div>
    </>
  );
}

export default AttachmentTab;
