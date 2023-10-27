import React, { useState } from "react";
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

  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "15%",
            cursor: "pointer",
          }}
        >
          {cars.map((car) => (
            <Card onClick={() => setShowPDF(true)}
              key={car.id}
              style={{
                margin: 10,
                padding: 10,
              }}
            >
              open pdf
            </Card>
          ))}
        </div>

        <div>
      {showPDF ? (
<PDFViewer />
      ) : (
<button onClick={() => setShowPDF(true)}></button> 
      )}
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
