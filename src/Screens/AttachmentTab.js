import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { Viewer } from "@react-pdf-viewer/core";
import SamplePDF from "../Images/sample.pdf";
import Card from "@mui/material/Card";
import "../Screens/AttachmentTab.css";
import PDFViewer from "./PDFViewer";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function AttachmentTab() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [showPDF, setShowPDF] = useState(false);

  const FilesArr = [
    { id:1,FILE_NAME:"PDF 1", URL:"http://10.5.51.41:9000/sample.pdf"},
    { id:2,FILE_NAME:"PDF 2", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:3,FILE_NAME:"PDF 3", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:4,FILE_NAME:"PDF 4", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:5,FILE_NAME:"PDF 5", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:6,FILE_NAME:"PDF 6", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:7,FILE_NAME:"PDF 7", URL:"http://10.5.51.41:9000/sample2.pdf"},
    { id:8,FILE_NAME:"PDF 8", URL:"http://10.5.51.41:9000/sample2.pdf"},
  ];
  const [SelectedFileURL,setSelectedFileURL]=useState({})

  useEffect(()=>{

    setSelectedFileURL(FilesArr[0].URL)
  },[])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div
        style={{
          // display: "flex",
          // justifyContent: "space-between",
          // height:"10vh",
        }}
        className="attach-main-container"
      >
        <div className="card-class"
          style={{
            // width: "10%",
            cursor: "pointer",
          }}
        >


          <div className="scrollmenu">

          {FilesArr.map((val) => (
            <div
              key={val.id}
              style={{
                // display:"flex",
                margin: 10,
                padding: 10,
                // height:"5vh",
                // justifyContent:"center",
                // verticalAlign:"center",
                // alignItems:"center",
                backgroundColor:SelectedFileURL==val.URL? "#4775ce":null
              }}
              className="scrollmenu-item"
              onClick={()=>{
                setSelectedFileURL(val.URL)
              }}
            >
              <p 
              style={{
                color:SelectedFileURL==val.URL? "white":"black",
              }}>
                {val.FILE_NAME}
              </p>
            </div>
          ))}
          </div>

        </div>
        <div style={{
          width:"90%"
        }}>
      {/* {showPDF ? (
<PDFViewer />
      ) : (
<button onClick={() => setShowPDF(true)}></button> 
      )} */}
      
        <embed
          src={SelectedFileURL}
          width="100%"
          height="550"
        >
        </embed>
</div>

{/* 
        <embed
          src="http://10.5.51.41:9000/sample.pdf"
          width="100%"
          height="550"
        >
        </embed> */}
      </div>
    </>
  );
}

export default AttachmentTab;

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// // import SamplePDF from "../Images/sample.pdf"
// import { Viewer } from "@react-pdf-viewer/core";
// import SamplePDF from "../Images/sample.pdf";
// import Card from "@material-ui/Card";

// // Import the styles
// import "@react-pdf-viewer/core/lib/styles/index.css";

// function AttachmentTab() {
//   return <li>I am a {car.brand}</li>;
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(0);
//   const cars = [
//     { id: 1, brand: "Ford" },
//     { id: 2, brand: "BMW" },
//     { id: 3, brand: "Audi" },
//   ];

//   function onDocumentLoadSuccess(numPages) {
//     setNumPages(numPages);
//   }

//   return (
//     <>
//       <div className="main-container">
//         <h1>Who lives in my garage?</h1>
//         <ul>
//           {cars.map((car) => (
//             <Card>
//               <p>{car.brand}</p>
//               <p>{car.id}</p>
//             </Card>
//             // <key={car.id} brand={car.brand} />
//           ))}
//         </ul>
//         <div>
//           <embed
//             src="http://10.5.51.41:9000/sample.pdf"
//             width="100%"
//             height="550"
//           ></embed>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AttachmentTab;
