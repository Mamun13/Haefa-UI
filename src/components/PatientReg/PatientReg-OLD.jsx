import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiError } from "react-icons/bi";
import "./PatientReg.css";
import SectionTitle from "../SectionTitleDemo/SectionTitle";
import GlobalButton from "../GlobalBtn/GlobalButton";
import SectionBanner from "../SectionBannerDemo/SectionBanner";
import SingleButton from "./../Buttons/SingleButton/SingleButton";

const PatientReg = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [showhide, setShowhide] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  return (
    <>
      <section className="patient-registration">
        {/* banner  */}
        <SectionBanner title="patient registration" />

        {/* form */}
        <div className="container">
          <SectionTitle title="Registration" />
          <form action="" className="mt-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="number"
                    name="registrationNo"
                    id="registrationNo"
                    className="form-control form-radious inputBox"
                    placeholder="Registration No *"
                  />
                  <div className="form-text ps-3 mt-1 text-danger">
                    <BiError className="error-icon" />
                    <span className="ps-1">The field can not be empty *</span>
                  </div>
                </div>

                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control form-radious inputBox"
                    placeholder="First name *"
                  />
                </div>

                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control form-radious inputBox"
                    placeholder="Last name *"
                  />
                </div>

                <div className="mb-3">
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control form-radious inputBox"
                  />
                </div>

                <div className="mb-3 shadowme">
                  <input
                    type="text"
                    name="patientAge"
                    id="patientAge"
                    className="form-control form-radious inputBox"
                    placeholder="Patient Age *"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3 shadowme">
                  <input
                    type="number"
                    name="contactNumber"
                    id="contactNumber"
                    className="form-control form-radious inputBox"
                    placeholder="Contact No. *"
                  />
                </div>
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>Select Gender *</option>
                    <option>Male </option>
                    <option>Female </option>
                    <option>Others </option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    name="NID"
                    id="NID"
                    className="form-control form-radious inputBox"
                    placeholder="NID/Birth/ID No. *"
                  />
                </div>

                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                  >
                    <option>Marital Status *</option>
                    <option>Married </option>
                    <option>Unmarried </option>
                  </select>
                </div>
              </div>
            </div>
            {/* Address information */}
            <SectionTitle title="Address" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <select
                    id="Select"
                    className="form-select rounded-pill inputBox"
                    onChange={(e) => handleshowhide(e)}
                  >
                    <option value="1">Address Type</option>
                    <option value="2"> Present address </option>
                    <option value="3"> Permanent address </option>
                    <option value="4"> Camp </option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="AddressLine"
                    id="AddressLine"
                    className="form-control form-radious inputBox"
                    placeholder="Address line"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="Village"
                    id="Village"
                    className="form-control form-radious inputBox"
                    placeholder="Village"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="Thana"
                    id="Thana"
                    className="form-control form-radious inputBox"
                    placeholder="Thana"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    name="PostCode"
                    id="PostCode"
                    className="form-control form-radious inputBox"
                    placeholder="Post Code"
                  />
                </div>

                <div className="mb-3">
                  <select id="district"
                    className="form-select rounded-pill inputBox">
                    <option>District</option>
                    <option>Faridpur</option>
                    <option>Gazipur</option>
                    <option>Gopalganj</option>
                    <option>Jamalpur</option>
                    <option>Kishoreganj</option>
                    <option>Madaripur</option>
                    <option>Manikganj</option>
                    <option>Mymensingh</option>
                    <option>Narayanganj</option>
                    <option>Narsingdi</option>
                    <option>Netrokona</option>
                    <option>Rajbari</option>
                    <option>Shariatpur</option>
                    <option>Bogra</option>
                    <option>Naogaon</option>
                    <option>Nawabganj</option>
                    <option>Pabna</option>
                    <option>Rajshahi</option>
                    <option>Sirajgonj</option>
                    <option>Dinajpur</option>
                    <option>Gaibandha</option>
                    <option>Kurigram</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Country"
                    id="Country"
                    className="form-control form-radious inputBox"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>

            {/* camp information */}
            {showhide === "4" && (
              <>
                <SectionTitle title="Refugee camp" />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="CampName"
                        id="CampName"
                        className="form-control form-radious inputBox"
                        placeholder="Camp"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        name="BlockNo"
                        id="BlockNo"
                        className="form-control form-radious inputBox"
                        placeholder="Block No."
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="number"
                        name="Mazi"
                        id="Mazi"
                        className="form-control form-radious inputBox"
                        placeholder="Majhi / Captain"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="number"
                        name="TentNo"
                        id="TentNo"
                        className="form-control form-radious inputBox"
                        placeholder="Tent No."
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="number"
                        name="FCN"
                        id="FCN"
                        className="form-control form-radious inputBox"
                        placeholder="FCN No."
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="text-center mt-3 position-relative">
				        <SingleButton btnOne="save & next" link="/go-pic" />	
            </div>
            
          </form>
        </div>

        {/* global button */}
        <GlobalButton />
      </section>
    </>
  );
};

export default PatientReg;
