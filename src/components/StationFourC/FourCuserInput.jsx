import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionBanner from "../SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import FourCuserInputModal from "./Modals/ProvitionalModal";
import InvestigationModal from "./Modals/InvestigationModal";
import TreatmentModal from "./Modals/TreatmentModal";
import ReferralModal from "./Modals/ReferralModal";
import AdviceModal from "./Modals/AdviceModal";
import SingleButton from "../Buttons/SingleButton/SingleButton";
import DoubleButton from "./../Buttons/DoubleButton/DoubleButton";

const TPuserData = () => {
  return (
    <>
      <section>
        <SectionBanner title="Station 4C - Shanaz Emu" />
        <div className="container">
          <div className="show-data mb-4">
            <ul>
              <li className="mb-1">
                <abbr className="me-2">Age:</abbr>
                <kbd className="me-2">28</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Height & Weight:</abbr>
                <kbd className="me-2">Height: 170cm</kbd>
                <kbd className="me-2">Weight: 65kg</kbd>
                <kbd className="me-2">BMI: 18.5</kbd>
                <kbd className="me-2">BMI Class:Normal</kbd>
                <kbd className="me-2">MUAC: 23cm</kbd>
                <kbd className="me-2">MUAC Class: Normal</kbd>
                <kbd className="me-2">Blood Group: A+</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Temperature:</abbr>
                <kbd className="me-2">Body Temperature: 98&#8457;</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Pulse / HR:</abbr>
                <kbd className="me-2">Heart Rate: 88</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Blood Pressure:</abbr>
                <kbd className="me-2">Systolic: 120–139mmHg</kbd>
                <kbd className="me-2">Diastolic: 80–89mmHg</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Repeat BP (&gt; 140/90):</abbr>
                <kbd className="me-2">Systolic: 120–139mmHg</kbd>
                <kbd className="me-2">Diastolic: 80–89mmHg</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Respiratory:</abbr>
                <kbd className="me-2">Respiratory Rate: 12</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">SpO2</abbr>
                <kbd className="me-2">SpO2: 95%</kbd>
                <kbd className="me-2">SpO2 Rate: Normal</kbd>
              </li>
              <li className="mb-1">
                <abbr className="me-2">Glucose & Hemoglobin:</abbr>
                <kbd className="me-2">RBG: 3.9mmol/L</kbd>
                <kbd className="me-2">2 Hours After Breakfast</kbd>
                <kbd className="me-2">FBG: 5.6 mmol/L</kbd>
                <kbd className="me-2">Hemoglobin: 13.8g/dl</kbd>
              </li>
            </ul>
          </div>
          <form action="" className="mt-3">
            <div className="row">
              <div className="col-lg-6">
                <Accordion>
                  {/* Provitional Diagnosis */}
                  <Accordion.Item eventKey="0" className="input-shadow">
                    <Accordion.Header>Provitional Diagnosis</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <FourCuserInputModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Provitional Diagnosis */}
                  <Accordion.Item eventKey="1" className="input-shadow">
                    <Accordion.Header>Lab Investigations</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <InvestigationModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Provitional Diagnosis */}
                  <Accordion.Item eventKey="2" className="input-shadow">
                    <Accordion.Header>Treatment Suggestions</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <TreatmentModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <Accordion>
                  {/* Referral Section	 */}
                  <Accordion.Item eventKey="0" className="input-shadow">
                    <Accordion.Header>Referral Section</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <ReferralModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Referral Section	 */}
                  <Accordion.Item eventKey="1" className="input-shadow">
                    <Accordion.Header>Advice</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <AdviceModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="input-shadow">
                    <Accordion.Header>Follow up Dates</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        {/* <ReferralModal /> */}
                      </div>
                      <div className="mb-3 mt-3 input-shadow rounded-pill">
                        <select
                          id="Select"
                          className="form-select input-padding rounded-pill select-form-padding"
                        >
                          <option>Health Status </option>
                          <option>Avarage </option>
                          <option>Good</option>
                          <option>Normal</option>
                        </select>
                      </div>
                      <div className="mb-3 pb-0 m-0 input-shadow rounded-pill">
                        <input
                          type="text"
                          id=""
                          className="form-control input-padding rounded-pill py-2 border-0"
                          placeholder="Comment"
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

			<div className="text-center mt-3 position-relative">
				<SingleButton btnOne="save & Next" link="/prescription"/>
			</div>
          </form>
        </div>

        <GlobalButton />
      </section>
    </>
  );
};

export default TPuserData;
