import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import SamplePDF from '../Images/sample.pdf'
 
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
 
function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
 
  return (
<div>
<Document
        file={SamplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
>
<Page pageNumber={pageNumber} />
</Document>
<p>
        Page {pageNumber} of {numPages}
</p>
</div>
  );
}
 
export default PDFViewer;