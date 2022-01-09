import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import ConvertApi from "./ConvertApi";
import "../converter.css"

const PDFConverter = () => {
  const form = useRef(null);
  const [showResult, setShowResult] = useState(false);
  const [resultFileName, setResultFileName] = useState("None");
  const [resultFileLink, setResultFileLink] = useState("#");
  const elResult = useRef(null).current;
  const elResultLink = useRef(null).current;

  const convertToPDF = (e) => {
    e.preventDefault();
    setShowResult(true)
    document.documentElement.style.cursor = "wait";
    ConvertApi.worker(
      new URL("https://worker.convertapi.com/user/100000001/worker/any-to-pdf"),
      e.currentTarget
    )
      .then((r) => r.json())
      .then((files) => {
        setResultFileName(files[0].FileName);
        setResultFileLink(files[0].Url);
        setShowResult(false)
      })
      .finally(() => (document.documentElement.style.cursor = "default"));
  };
  return (
    <div className="wrapper">
      <Sidebar />
      <section class="home-section noBackground">
        <h1>PDF Converter</h1>
        <br></br>
        <br></br>
        <br></br>

        <div class="form">
          <form id="form" onSubmit={convertToPDF}>
            <p>
              {" "}
              <label>Any document (e.g. docx, jpg, xlsx):</label>
              {/* <br></br> */}
              <input type="file" id="file" />
              <label for="file" class="btn-1">
                Upload File
              </label>
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
          <br></br>
          <br></br>
          <p id="result">
            Result file:
            <a
              id="resultLink"
              href={resultFileLink}
              className={`${showResult ? "none" : "block"}`}
            >
              {resultFileName}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PDFConverter;
