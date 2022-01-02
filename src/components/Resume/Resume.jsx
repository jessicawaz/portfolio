import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../Resume/resume.pdf";
import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div id="resume">
      <h1>Resume.</h1>
      <div class="doc">
        <Document file={resume}>
          <Page pageIndex={0} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
