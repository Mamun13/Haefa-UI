import React from "react";
import "./Rating.css";

const Anemia = () => {
  return (
    <>
     <fieldset className="rating">
        <input type="radio" id="star1" name="anemia" value="1" />
        <label className="full" for="star1"></label>

        <input type="radio" id="star2" name="anemia" value="2" />
        <label className="full" for="star2"></label>

        <input type="radio" id="star3" name="anemia" value="3" />
        <label className="full" for="star3"></label>
      </fieldset>
    </>
  );
};

export default Anemia;
