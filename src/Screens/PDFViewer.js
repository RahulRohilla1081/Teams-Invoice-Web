import React, { useState } from 'react';

const App = () => {
  const [pdfData, setPdfData] = useState(''); // Your Base64 string from the API response

  const downloadPdf = () => {
    // Decode the Base64 string
    const decodedData = atob(pdfData);

    // Convert the decoded data to a Uint8Array
    const uint8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      uint8Array[i] = decodedData.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    const blob = new Blob([uint8Array], { type: 'application/pdf' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded.pdf';
    document.body.appendChild(a);
    
    // Trigger the click event on the link to start the download
    a.click();

    // Clean up the temporary link
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

export default App;
