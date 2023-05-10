import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SectionTitle from "../../components/SectionTitleDemo/SectionTitle";
import GlobalButton from "../../components/GlobalBtn/GlobalButton";
import SingleButton from "../../components/Buttons/SingleButton/SingleButton";
import { Link } from "react-router-dom";
import SectionBanner from "../../components/SectionBannerDemo/SectionBanner";

const SFourUserData = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <section className="patient-registration">
        {/* banner  */}
        <SectionBanner title="Station 4B - Shanaz Emu"/>

        {/* form */}
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
          
          <SectionTitle title="Obstetrics Information"/>
          <form action="" className="mt-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="Gravida"
                    id="Gravida"
                    className="form-control form-radious inputBox"
                    placeholder="Gravida Para"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="StillBirth"
                    id="StillBirth"
                    className="form-control form-radious inputBox"
                    placeholder="Still Birth"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Miscarriage"
                    id="Miscarriage"
                    className="form-control form-radious inputBox"
                    placeholder="Miscarriage / Abs"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="MR"
                    id="MR"
                    className="form-control form-radious inputBox"
                    placeholder="MR"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="LivingBirthMale"
                    id="LivingBirthMale"
                    className="form-control form-radious inputBox"
                    placeholder="Living Birth Male"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="LivingBirthFemale"
                    id="LivingBirthFemale"
                    className="form-control form-radious inputBox"
                    placeholder="Living Birth female"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="LivingBirth"
                    id="LivingBirth"
                    className="form-control form-radious inputBox"
                    placeholder="Living Birth"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Child Mortality" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="years"
                    id="years"
                    className="form-control form-radious inputBox"
                    placeholder="0-5 years"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="OverYears"
                    id="OverYears"
                    className="form-control form-radious inputBox"
                    placeholder="Above 5 years"
                  />
                </div>
                <div className="mb-3 ms-3">
				<div className="form-check d-flex aligh-items-center">
					<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
					<label className="form-check-label ms-2" for="flexCheckDefault">
						6 Month to 59 Month
					</label>
					</div>
                </div>
              </div>
            </div>

            <SectionTitle title="Menstrual History" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control form-radious inputBox"
                    placeholderText="LMP"
                  />
                </div>
                {/* <div className="mb-3">
									<input
										type="text"
										name="LMP"
										id="LMP"
										className="form-control form-radious inputBox"
										placeholder="LMP"
									/>
								</div> */}
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>Contraception Method</option>
                    <option>Option - 1</option>
                    <option>Option - 2</option>
                    <option>Option - 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Others"
                    id="Others"
                    className="form-control form-radious inputBox"
                    placeholder="Others"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Comment"
                    id="Comment"
                    className="form-control form-radious inputBox"
                    placeholder="Comment"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>
                      What product you use durina the menstruation
                    </option>
                    <option>Option - 1</option>
                    <option>Option - 2</option>
                    <option>Option - 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Others"
                    id="Others"
                    className="form-control form-radious inputBox"
                    placeholder="Others"
                  />
                </div>
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>How often do you change / replace?</option>
                    <option>Option - 1</option>
                    <option>Option - 2</option>
                    <option>Option - 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Otherstwo"
                    id="Otherstwo"
                    className="form-control form-radious inputBox"
                    placeholder="Others"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="offset-3 col-lg-6">
                <h4 className="text-center pt-5 mb-3">
                  Cervical Cancer Screening
                </h4>
                <p className="text-center">
                  Does Patient give convent to Cervical cancer screening?{" "}
                </p>

                <div className="text-center mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="inlineRadio5"
                      value="option5"
                    />
                    <label
                      className="form-check-label text-capitalize"
                      for="inlineRadio5"
                    >
                      no
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cervical"
                      id="inlineRadio6"
                      value="option6"
                    />
                    <label
                      className="form-check-label text-capitalize"
                      for="inlineRadio6"
                    >
                      yes
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>Cervical cancer screening (VIA) results</option>
                    <option>Option - 1</option>
                    <option>Option - 2</option>
                    <option>Option - 3</option>
                  </select>
                </div>

                <p className="text-center mt-4">
                  Referred for colposcopy / biopsy
                </p>
                <div className="text-center mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="colposcopy"
                      id="inlineRadio7"
                      value="option7"
                    />
                    <label
                      className="form-check-label text-capitalize"
                      for="inlineRadio7"
                    >
                      no
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="colposcopy"
                      id="inlineRadio8"
                      value="option8"
                    />
                    <label
                      className="form-check-label text-capitalize"
                      for="inlineRadio8"
                    >
                      yes
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="Where"
                    id="Where"
                    className="form-control form-radious inputBox"
                    placeholder="Where?"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-3 position-relative">
              <SingleButton btnOne="save & next" link="/four-c-userinput"/>
          </div>
          </form>
        </div>

        {/* global button */}
        <GlobalButton />
      </section>
    </>
  );
};

export default SFourUserData;
