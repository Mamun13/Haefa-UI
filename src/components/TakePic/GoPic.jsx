import React from "react";
import SectionBanner from "../SectionBannerDemo/SectionBanner";
import { AiFillCamera } from "react-icons/ai";
import SingleButton from "../Buttons/SingleButton/SingleButton";

const GoPic = () => {
  return (
    <>
      <section>
        <SectionBanner title="Take picture" />
        <div className="container text-center">
          <p className="my-5">
            <AiFillCamera size={"200px"} />
          </p>

          <div className="text-center mt-3 position-relative">
            <SingleButton btnOne="take picture" link="/user-details" />
          </div>
        </div>
      </section>
    </>
  );
};

export default GoPic;
