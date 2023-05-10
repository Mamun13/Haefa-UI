import React from "react";
import "./Rating.css";

const Edema = () => {
  return (
    <>
      <fieldset className="rating">
        <input type="radio" id="star11" name="edema" value="11" />
        <label className="full" for="star11"></label>

        <input type="radio" id="star12" name="edema" value="12" />
        <label className="full" for="star12"></label>

        <input type="radio" id="star13" name="edema" value="13" />
        <label className="full" for="star13"></label>
      </fieldset>
    </>
  );
};

export default Edema;
