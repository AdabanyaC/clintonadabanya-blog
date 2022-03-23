import React, { Fragment } from "react";
import MentalStrengthImage from "./../assets/man_working_out.jpg";

const style = {
  backgroundImage: `url(${MentalStrengthImage})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
};

const IntroPost = () => {
  return (
    <Fragment>
      <div className="bg-blue-300 h-96 w-3/5 rounded-xl" style={style}></div>
      <div className="self-center w-2/5">
        <p className="uppercase text-gray-500 tracking-wide">faith</p>
        <h3 className="text-3xl">Building Mental Fortitude</h3>
        <p className="mt-2 text-gray-500 text-justify">
          To become successful in any field of endeavor, one of the most important aspects you must develop is your
          mind.
        </p>
      </div>
    </Fragment>
  );
};

export default IntroPost;
