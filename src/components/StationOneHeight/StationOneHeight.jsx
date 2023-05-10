import React from "react";
import SectionBannerDemo from "../../components/SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import SectionTitle from "../SectionTitleDemo/SectionTitle";
import StationButton from "../Buttons/StationButton/StationButton";
// import { Link } from "react-router-dom";
import SingleButton from "../Buttons/SingleButton/SingleButton";
import "./StationOneHeight.css";

const StationOneHeight = () => {
  return (
    <>
      <section className="heightwidth">
        <SectionBannerDemo title="Station 1 - Jiaur Rahman" />

        <div className="container">
          <SectionTitle title="height & weight" />
          <form action="">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    className="form-control form-radious inputBox"
                    placeholder="Height (cm)"
                  />
                </div>
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="bmi"
                    id="bmi"
                    className="form-control form-radious inputBox"
                    placeholder="BMI"
                  />
                </div>
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="muac"
                    id="muac"
                    className="form-control form-radious inputBox"
                    placeholder="MUAC (cm) *"
                  />
                </div>
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>Blood Group</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB-</option>
                    <option>AB+</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    className="form-control form-radious inputBox"
                    placeholder="Weight (kg)"
                  />
                </div>
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="bmiclass"
                    id="bmiclass"
                    className="form-control form-radious inputBox"
                    placeholder="BMI class"
                  />
                </div>
                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="muac"
                    id="muac"
                    className="form-control form-radious inputBox"
                    placeholder="MUAC class"
                  />
                </div>
              </div>
            </div>
          </form>
        <div className="text-center mt-3 position-relative">
          <SingleButton btnOne="save" link="/user-table"/>
          <StationButton btnOne="Save & station 2" link="/blood-pressure-table" btnBg="button-bg"/>
        </div>
        
        </div>
        <GlobalButton />
      </section>
    </>
  );
};

export default StationOneHeight;
