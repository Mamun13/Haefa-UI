import React from "react";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import barCode from "../../assets/img/qr-code.png";
import SectionBannerDemo from "../SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import { BiCamera } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import "./StationOneTable.css";

const StationOneTable = ({ link, title }) => {
  return (
    <>
      <div id="stationOneTable">
        <SectionBannerDemo title={title} />
        <div className="container">
          <h3 className="sectionTitle text-center mb-4">Search Patient</h3>

          <div className="checkbox">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                checked
                type="radio"
                name="RadioDefault"
                id="card"
              />
              <label className="form-check-label text-capitalize" for="card">
                Card
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="RadioDefault"
                id="nid"
              />
              <label className="form-check-label text-capitalize" for="nid">
                NID
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="RadioDefault"
                id="name"
              />
              <label className="form-check-label text-capitalize" for="name">
                Name
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="RadioDefault"
                id="mobilenumber"
              />
              <label
                className="form-check-label text-capitalize"
                for="mobilenumber"
              >
                mobile number
              </label>
            </div>
          </div>

          <div className="search">
            <form action="" className="searchBox">
              <input type="text" placeholder="Search.." name="search" />
            </form>
            <div className="barCodeBox">
              <img src={barCode} alt="img" />
              <div className="camera">
                <BiCamera />
              </div>
            </div>
          </div>

          <Table responsive="sm md lg xl" className="patientTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>MS</th>
                <th>FP</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Jiaur Rahman</td>
                <td>Male</td>
                <td>Yes</td>
                <td>No</td>
                <td>
                  <div className="status form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                  </div>
                </td>

                <td>
                  <Link to={link}>
                    <BsArrowRightCircle className="action" />
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>101</td>
                <td>Jiaur Rahman</td>
                <td>Male</td>
                <td>Yes</td>
                <td>No</td>
                <td>
                  <div className="status form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                  </div>
                </td>

                <td>
                  <Link to={link}>
                    <BsArrowRightCircle className="action" />
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>101</td>
                <td>Jiaur Rahman</td>
                <td>Male</td>
                <td>Yes</td>
                <td>No</td>
                <td>
                  <div className="status form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                  </div>
                </td>

                <td>
                  <Link to={link}>
                    <BsArrowRightCircle className="action" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <GlobalButton />
      </div>
    </>
  );
};

export default StationOneTable;
