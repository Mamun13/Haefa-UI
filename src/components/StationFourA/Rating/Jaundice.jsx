import React from "react";
import "./Rating.css";

const Jaundice = () => {
  return (
    <>
      <fieldset className="rating">
        <input type="radio" id="star6" name="jaundice" value="6" />
        <label className="full" for="star6"></label>

        <input type="radio" id="star7" name="jaundice" value="7" />
        <label className="full" for="star7"></label>

        <input type="radio" id="star8" name="jaundice" value="8" />
        <label className="full" for="star8"></label>
      </fieldset>
    </>
  );
};

export default Jaundice;
