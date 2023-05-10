import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import profileImg from "../../assets/img/profile_img.jpg";
import { FiSettings } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import "./GlobalButton.css";

const GlobalButton = () => {
  return (
    <>
      <section id="globalButton">
        <div className="container">
          <div className="buttonBox">
            <div className="home text-center">
              <Link to="/dashboard">
                <HiHome className="fs-3 text-secondary"/>
                <p className="font-14 text-center mb-0 fw-semibold text-secondary">
                  Home
                </p>
              </Link>
            </div>
            <div className="setting text-center">
              <Link to="/dashboard">
                <FiSettings className="fs-3 text-secondary" />
                <p className="font-14 text-center mb-0 fw-semibold text-secondary">
                  Settings
                </p>
              </Link>
            </div>
            <div className="profile text-center">
              {/* <Link to="/">
                <img className="profileImg" src={profileImg} alt="img"/>
                <p className="font-16 text-center mb-0 fw-semibold text-secondary">
                  Profile
                </p>
              </Link> */}
              <Dropdown>
                <Dropdown.Toggle id="">
                <img className="profileImg" src={profileImg} alt="img"/>
                <p className="font-14 text-center mb-0 fw-semibold text-secondary">
                  Profile
                </p>
                </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <h6 className="pName">Jiaur Rahman</h6>
                    <i className="pDeg">MBBS, MPH, MS(Orthopedics)</i>
                   
                    <Link to="/" className="logoutBtn">
                       <MdOutlineLogout className="fs-6 me-1 text-light"/>
                       Logout
                    </Link>
                  </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalButton;
