import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Prescription.css";
import SectionBanner from "../SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import DoubleButton from './../Buttons/DoubleButton/DoubleButton';

const Prescription = () => {
  return (
    <>
      <SectionBanner title="Prescription Preview" />
      <section id="prescription">
        <div className="container bg-light py-5 px-5">
          <div className="patienStatus mb-4">
            <h3>Height and Weight</h3>
            <span>12-10-2023 &gt;&gt;</span>
            <span>Age: 28</span>
            <span>Height: 158.0 cm</span>
            <span>Weight: 62 kg</span>
            <span>BMI: 22.030 (Normal Weight)</span>
          </div>
          <div className="patienStatus mb-4">
            <h3>Blood Pressure</h3>
            <span>Systolic: 160.0 mmHgd</span>
            <span>Diastolic: 95.0 mmHg</span>
            <p className="mt-4 mb-1 fs-6">Repeat BP</p>
            <span>Systolic: 150.0 mmHg</span>
            <span>Diastolic: 90.0 mmHg</span>
            <span>Heart Rate: 84.0 bpm</span>
            <span>Temperature: 100 &#8457;</span>
          </div>
          <div className="patienStatus mb-4">
            <h3>Glucose and Hemoglobin</h3>
            <span>When Did You Last Eat?: 2.0 hours</span>
            <span>RBG: 9.5 mMol</span>
            <span>FBG: 0.0 mMol</span>
            <span>Hemoglobin: 11.0 g/dl</span>
          </div>
          <div className="patienStatus mb-4">
            <h3>Physical (Chief) Complaints</h3>
            <span>12-10-2022: Neck pain for 15 Day(s)</span>
            <span>12-10-2022: Vertigo for 5 Day(s)</span>
            <span>12-10-2022: Fever for 2 Day(s)</span>
          </div>
          <div className="patienStatus mb-4">
            <h3>Ganeral Findings</h3>
            <p className="text-center mt-4 mb-1 fs-6">Anemia</p>
            <p className="text-center mt-0 mb-1">
              <strong>
                <AiFillStar className="fs-4 mx-1 star"/>
              </strong>
              <strong>
                <AiFillStar className="fs-4 mx-1 star"/>
              </strong>
            </p>
          </div>
          <div className="patienStatus mb-4">
            <h3>Physical Findings</h3>
            <span>PF</span>
          </div>
          <div className="patienStatus mb-4">
            <h3>Current Rx Taken</h3>
            <span>Rx</span>
          </div>
        </div>

        <div className="">
								<DoubleButton btnone="Back" btntwo="Submit" link="/four-c-userinput" link2="/final-prescription"/>
							</div>
      </section>
      <GlobalButton />
    </>
  );
};

export default Prescription;
