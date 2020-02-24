import React from 'react';
import Resume from './MMarilloResume.pdf'
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CV() {

  return (
    <div className="cv">
      <Document
      file={Resume}
      onLoadError={console.error}
      >
        <Page pageNumber={1} 
              scale={.9}
              className="cvPdf"/>
        </Document>
    </div>
    );
}

export default CV;