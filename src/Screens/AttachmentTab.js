import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import SamplePDF from "../Images/sample.pdf"
import { Viewer } from '@react-pdf-viewer/core';
import SamplePDF from "../Images/sample.pdf" 

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function AttachmentTab() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  function onDocumentLoadSuccess(numPages ) {
    setNumPages(numPages);
  }

  return (
  <div>
      <embed
        src="http://10.5.51.41:9000/sample.pdf"
        width="100%"
        height="550"
      ></embed>
  </div>
  );
}

export default AttachmentTab;
