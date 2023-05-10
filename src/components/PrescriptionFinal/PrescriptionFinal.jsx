import React from "react";
import { Link } from "react-router-dom";
import "./PrescriptionFinal.css";
import ApiLogo from "../../assets/img/apilogo.png";
import GlobalButton from "./../GlobalBtn/GlobalButton";
import Signature from "../../assets/img/signature.png";
import {
  BsFileEarmarkPdfFill,
  BsImages,
  BsFillPrinterFill,
} from "react-icons/bs";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const PrescriptionFinal = () => {
  return (
    <>
      <section id="PrescriptionFinal" className="container bg-light px-5">
        <h3 className="text-center m-0 py-4 px-4">Prescription 103</h3>

        <div className="headerTop">
          <span className="me-4 fs-6">
            <b>Name:</b> Shahanaz Emu
          </span>
          <span className="me-4 fs-6">
            <b>Age:</b> 29
          </span>
          <span className="me-4 fs-6">
            <b>Gender:</b> Female
          </span>
          <span className="me-4 fs-6">
            <b>Date:</b> 15/09/2023
          </span>
        </div>
        <div className="d-flex">
          <div className="leftBar py-3">
            <div className="textItem">
              <h6 className="testTitle">
                <b>Complaints</b>
              </h6>
              <p>12/10/2023: Neck pain for 15 day(s)</p>
              <p>12/10/2023: Vertigo for 5 day(s)</p>
              <p>12/10/2023: Fever for 2 day(s)</p>
            </div>
            <div className="textItem mt-4">
              <h6 className="testTitle">
                <b>O/S</b>
              </h6>
              <p>Height: 188.0 cm</p>
              <p>Weight: 55.0 kg</p>
              <p>BMI: 22.030</p>
              <p>Pulse: 84.0</p>
              <p>BP: 160.0 / 95.0 mmHg</p>
            </div>
            <div className="textItem mt-4">
              <h6 className="testTitle">
                <b>Provisional Dx</b>
              </h6>
              <b>Date: 12-10-2022</b>
              <p>1. R509 Faver, unspecified [Confirmed]</p>
              <p>2. 110 Essential (primary) hypertension [Presumptive]</p>
            </div>
            <div className="textItem mt-4">
              <h6 className="testTitle">
                <b>On Spot Invenstigations</b>
              </h6>
              <p>RBS: 9.5 mMol</p>
              <p>FBS: 0.0 mMol</p>
              <p>Hemoglobin: 11.0 g/dL VIA/Negative</p>
            </div>
            <div className="textItem mt-4">
              <h6 className="testTitle">
                <b>Lab Invenstigations</b>
              </h6>
              <p>CBC with ESR</p>
              <p>Widal Test</p>
              <p>Creatinine</p>
            </div>
          </div>
          <div className="rightBar py-3 px-4">
            <h2 className="rx">&#8478;</h2>
            <p>
              <b>1.</b> Tab Napa (500mg) <br />
              <i> ৬ ঘন্টা পর পর - If fever</i>
            </p>
            <p>
              <b>2.</b> Capsule Xeldrin (20mg) <br />
              <i> প্রতিদিন সকালে খাবার পূর্বে - ১০ দিন </i>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="mb-5">
              <b>Advaice / পরামর্শ</b>
              <p>
                <b>1.</b> take more water
              </p>
            </p>
            <p className="mb-5">
              <b>Referral / রেফারেল</b>
              <p>
                <b>1.</b> 12/10/2023: Hypertension, BRAC
              </p>
            </p>
            <p>
              <b>Follow-up / পরবর্তী সাক্ষাৎ</b>
              <p>
                <b>1.</b> Status: Static
              </p>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <div className="col-lg-6">
              <address className="mb-0 py-3">
                <p className="fs mb-0 pb-0">
                  Health on wheels Health Clinic <br /> House: 31, Road: 16{" "}
                  <br /> Sector: 13 Uttara <br /> Contact: 01631-985375 <br />{" "}
                  Email: healthonwheels.usa@gmail.com <br /> Website:
                  www.healthonwheels.usa.org
                </p>
              </address>
            </div>
            <div className="col-lg-6">
              <address className="d-flex align-items-end flex-column mb-0 py-3">
                <div className="dev position-relative">
                  <p className="mb-0 fs">
                    Health And Education For All(HAEFA)
                    <br />
                    <b>US Office</b> <br /> 311 Bedford St, Lexington
                    <br /> MA 07420, USA
                    <br /> Email: healthonwheels.usa@gmail.com
                  </p>

                  <div className="signatureBox">
                    <img src={Signature} alt="img" className="signatureImage" />
                    <p>Doctor Four</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>

        <p className="mb-0 fs text-center pb-4">
          Powered By: <img src={ApiLogo} alt="img" className="apiLogo" />
        </p>
      </section>

      <div className="export container bg-light mt-3 p-3 text-end">
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Print</Tooltip>}>
          <Button className="me-2">
            <BsFillPrinterFill />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Download pdf</Tooltip>} >
          <Button className="me-2">
            <BsFileEarmarkPdfFill />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Download Image</Tooltip>} >
          <Button className="me-2">
            <BsImages />
          </Button>
        </OverlayTrigger>

        {/* <Link to="/" className="exportBtn me-2">
          <BsFillPrinterFill />
        </Link>
        <Link to="/" className="exportBtn me-2">
          <BsFileEarmarkPdfFill />
        </Link>
        <Link to="/" className="exportBtn">
          <BsImages />
        </Link> */}
      </div>
      <GlobalButton />
    </>
  );
};

export default PrescriptionFinal;
