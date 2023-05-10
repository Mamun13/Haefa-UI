import React from "react";
import { Link } from "react-router-dom";
import SectionBannerDemo from "../SectionBannerDemo/SectionBanner";
import GlobalButton from "./../GlobalBtn/GlobalButton";
import UserImage from "../../assets/img/profile.jpg";
import QrCode from "../../assets/img/qr-code.png";
import "./UserDtails.css";
import SingleButton from "./../Buttons/SingleButton/SingleButton";
import StationButton from "./../Buttons/StationButton/StationButton";
import {
  BsFileEarmarkPdfFill,
  BsImages,
  BsFillPrinterFill,
} from "react-icons/bs";

const UserDtails = () => {
  return (
    <>
      <section>
        <SectionBannerDemo title="patient details" />

        <div className="container">
          <div className="user_profile rounded-3">
            <div className="row">
              <div className="col-lg-8">
                <div className="profile">
                  <p className="text-capitalize font-16 m-0">
                    <span className="fw-bold">name: </span>Jiaur Rahman
                  </p>
                  <p className="text-capitalize font-16 m-0">
                    <span className="fw-bold">age: </span> 5 Months, 13 Days
                  </p>
                  <p className="text-capitalize font-16 m-0">
                    <span className="fw-bold">gender: </span>male
                  </p>
                  <p className="text-capitalize font-16 m-0">
                    <span className="fw-bold">NID / ID : </span> 00 00 00 00 00
                  </p>
                  <p className="text-capitalize font-16 m-0">
                    <span className="fw-bold">contact number : </span> 01700 00
                    00 00
                  </p>
                  <p className="text-capitalize font-16 m-0 mb-2">
                    <span className="fw-bold">Present address: </span> upazila/
                    country
                  </p>
                  <div className="barCode mt-3">
                    <img src={QrCode} alt="img" className="" />
                    <p className="text-uppercase mb-0">id:100</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={UserImage} alt="" className="userImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-3 mt-3 wBtn">
            <Link to="/" className="exportBtn">
              <BsFillPrinterFill />
            </Link>
          </div>

          <div className="text-center mt-3 position-relative">
            <SingleButton btnOne="save" link="/dashboard"/>
            <StationButton
              btnOne="Save & station 1"
              link="/user-table"
              btnBg="button-bg"
            />
          </div>
        </div>

        <GlobalButton />
      </section>
    </>
  );
};

export default UserDtails;
