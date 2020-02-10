import React from 'react';
import Graph from './Graph'
import Resume from './marilloresumepdf.pdf'
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CV() {

function onLoadSuccess(){
  console.log('hm')
}

  return (
    <div className="cv">
      <h1>MILES MARILLO'S CV</h1>
      <Document
      file={Resume}
      onLoadSuccess={onLoadSuccess()}
      onLoadError={console.error}
      >
        <Page pageNumber={1} 
              scale={.9}
              className="cvPdf"/>
        </Document>
<Graph />
    </div>
    );
}

export default CV;