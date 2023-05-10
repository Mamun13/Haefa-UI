import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionBanner from "../SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import "./TPuserInput.css";
import TPuserInputModal from "./TPuserInputModal";
import PESModal from "./PESModal";
import RXModal from "./RXModal";
import Anemia from "./Rating/Anemia";
import Edema from "./Rating/Edema";
import Jaundice from "./Rating/Jaundice";
import PatientIllness from "./Illness/PatientIllness";
import FamilyIllness from "./Illness/FamilyIllness";
import PhysicalExam from "./Illness/PhysiclExam";
import HeartNad from "./Illness/HeartNad";
import Vaccination from "./Illness/Vaccination";
import PatientSocial from "./Illness/PatientSocial";
import PatientWellbeing from "./Illness/PatientWellbeing";
import SingleButton from "./../Buttons/SingleButton/SingleButton";
import StationButton from "./../Buttons/StationButton/StationButton";

const TPuserData = () => {
  return (
    <>
      <section className="stationfoura">
        <SectionBanner title="Station 4A - Shanaz Emu" />
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
                  {/* complaints */}
                  <Accordion.Item eventKey="0" className="input-shadow">
                    <Accordion.Header>Chief Complaints</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <TPuserInputModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* TB screening */}
                  <Accordion.Item eventKey="1" className="input-shadow">
                    <Accordion.Header>TB Screening</Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">Cough &gt; 2 Weeks?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option1"
                              id="no1"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no1"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option1"
                              id="yes1"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes1"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">LGERF ?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option2"
                              id="no2"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no2"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option2"
                              id="yes2"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes2"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">Night Sweat ?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option3"
                              id="no3"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no3"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option3"
                              id="yes3"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes3"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">Weight Loss ?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option4"
                              id="no4"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no4"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option4"
                              id="yes4"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes4"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">Contact history ?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option5"
                              id="no5"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no5"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option5"
                              id="yes5"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes5"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="font-16">Vaccination - Covit 19 ?</p>
                        </div>
                        <div className="">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option6"
                              id="no6"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="no6"
                            >
                              no
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="option6"
                              id="yes6"
                              value=""
                            />
                            <label
                              className="form-check-label text-capitalize"
                              for="yes6"
                            >
                              yes
                            </label>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* physical examintion general */}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>General Examination</Accordion.Header>
                    <Accordion.Body>
                      <div className="mb-0 ratingItem">
                        <p className="mb-0">Anemia</p>
                        <p className="mb-0">
                          <Anemia />
                        </p>
                      </div>
                      <div className="mb-0 ratingItem">
                        <p className="mb-0">Jaundice</p>
                        <p className="mb-0">
                          <Jaundice />
                        </p>
                      </div>
                      <div className="mb-0 ratingItem">
                        <p className="mb-0">Edema</p>
                        <p className="mb-0">
                          <Edema />
                        </p>
                      </div>
                      <div className="mb-0 ratingItem">
                        <p className="mb-0">CVS</p>
                        <p className="mb-0">
                          {/* <Edema /> */}
                          <div className="">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioFour"
                                id="Normal"
                                value="option3"
                              />
                              <label
                                className="form-check-label text-capitalize"
                                for="Normal"
                              >
                                Normal
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioFour"
                                id="Abnormal"
                                value="option4"
                              />
                              <label
                                className="form-check-label text-capitalize"
                                for="Abnormal"
                              >
                                Abnormal
                              </label>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="mb-0 mb-1">
                        <p className="mb-0 mb-1">Physical Findings</p>
                        <textarea
                          id=""
                          name=""
                          rows="3"
                          className="comment form-control"
                          placeholder="type here"
                        ></textarea>
                      </div>
                      {/* Lymph Nodes with Palpable */}
                      <div className="mb-1">
                        <p className="font-16 mb-1">
                          Lymph Nodes with Palpable
                        </p>
                        <div className="position-relative onBtn">
                          <PhysicalExam />
                        </div>
                      </div>

                      {/* Heart with NAD */}
                      <p className="font-16 mb-1">Heart with NAD</p>
                      <div className="position-relative onBtn">
                        <PhysicalExam />
                      </div>

                      {/* Lungs with NAD */}
                      <p className="font-16 mb-1">Lungs with NAD</p>
                      <div className="position-relative onBtn">
                        <PhysicalExam />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* physical examintion systemic */}
                  <Accordion.Item eventKey="3" className="input-shadow">
                    <Accordion.Header>Systemic Examination </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <PESModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Current Rx taken */}
                  <Accordion.Item eventKey="4" className="input-shadow">
                    <Accordion.Header>
                      Current Medication Taken
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-flex justify-content-center">
                        <RXModal />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                   {/* Patient Wellbeing */}
                   <Accordion.Item eventKey="5" className="input-shadow">
                    <Accordion.Header>Patient Wellbeing</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Any sign of mental illness, stress or depression?
                          </p>
                        </div>
                        <div className="position-relative">
                          <PatientWellbeing className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                </Accordion>
              </div>
              <div className="col-lg-6">
                {/* Patient H/O illness */}
                <Accordion>
                  <Accordion.Item eventKey="0" className="input-shadow">
                    <Accordion.Header>Chronic Disease</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Do you have any of the following diseases?
                          </p>
                        </div>
                        <div className="position-relative">
                          <PatientIllness className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="input-shadow">
                    <Accordion.Header>Patient H/O illness</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Do you have any of the following diseases?
                          </p>
                        </div>
                        <div className="position-relative">
                          <PatientIllness className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Family H/O illness */}
                  <Accordion.Item eventKey="2" className="input-shadow">
                    <Accordion.Header>Family H/O illness</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Do you have any of the following diseases?
                          </p>
                        </div>
                        <div className="position-relative">
                          <FamilyIllness className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Family H/O illness */}
                  <Accordion.Item eventKey="3" className="input-shadow">
                    <Accordion.Header>Vaccination</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Do you have any of the following diseases?
                          </p>
                        </div>
                        <div className="position-relative">
                          <Vaccination className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Patient Social H/O */}
                  <Accordion.Item eventKey="4" className="input-shadow">
                    <Accordion.Header>Patient Social H/O</Accordion.Header>
                    <Accordion.Body>
                      <div className="">
                        <div className="">
                          <p className="font-16 fw-semibold">
                            Do you have any of the following diseases?
                          </p>
                        </div>
                        <div className="position-relative">
                          <PatientSocial className="toggle-btn" />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                </Accordion>
              </div>
            </div>

            <div className="text-center mt-3 position-relative">
              <SingleButton btnOne="save & next" link="/station-fourb"/>
          </div>
          </form>
        </div>

        <GlobalButton />
      </section>
    </>
  );
};

export default TPuserData;
