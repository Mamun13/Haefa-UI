import React from "react";
import SectionBanner from "./../SectionBannerDemo/SectionBanner";
import GlobalButton from "./../GlobalBtn/GlobalButton";
import SectionTitle from "./../SectionTitleDemo/SectionTitle";
import "./StationTwo.css";
import { Link } from "react-router-dom";
import StationButton from "../Buttons/StationButton/StationButton";
import SingleButton from "../Buttons/SingleButton/SingleButton";

const StationTwo = () => {
  return (
    <>
      <section>
        <SectionBanner title="Station 2 - Jiaur Rahman" />
        <div className="container">
          <form action="">
            <SectionTitle title="Temperature" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="temperature"
                    id="temperature"
                    className="form-control form-radious inputBox"
                    placeholder="Body Temperature ( F )"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Pulse / HR" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="pulse"
                    id="pulse"
                    className="form-control form-radious inputBox"
                    placeholder="Heart Rate"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Blood Pressure" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="bloodPressure"
                    id="bloodPressure"
                    className="form-control form-radious inputBox"
                    placeholder="Systolic (mmHg)"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="diastolic"
                    id="diastolic"
                    className="form-control form-radious inputBox"
                    placeholder="Diastolic (mmHg)"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Repeat BP (>140/90 )" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="repeatBp"
                    id="repeatBp"
                    className="form-control form-radious inputBox"
                    placeholder="Systolic (mmHg)"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="repeatBpDiastolic"
                    id="repeatBpDiastolic"
                    className="form-control form-radious inputBox"
                    placeholder="Diastolic (mmHg)"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Respiratory" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="respiratory"
                    id="respiratory"
                    className="form-control form-radious inputBox"
                    placeholder="Respiratory Rate"
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="SpO2" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="spo2"
                    id="spo2"
                    className="form-control form-radious inputBox"
                    placeholder="SpO2"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="spo2rate"
                    id="spo2rate"
                    className="form-control form-radious inputBox"
                    placeholder="SpO2 Rate"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-3 position-relative">
              <SingleButton btnOne="save & Next" link="/cardiovascular-risk" />
            </div>
          </form>
        </div>
        <GlobalButton />
      </section>
    </>
  );
};

export default StationTwo;
