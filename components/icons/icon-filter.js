/* eslint-disable react/prop-types */
import React from "react";

const IconFilter = ({
  fill = "inherit",
  width = "1.5rem",
  height = "1.5rem",
  className = "",
  viewBox = "0 0 24 24",
}) => (
  <svg
    width={width}
    fill={fill}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M21,3H5C4.447,3,4,3.447,4,4v2.59c0,0.523,0.213,1.037,0.583,1.407L10,13.414V21c0,0.347,0.18,0.668,0.475,0.851 C10.635,21.95,10.817,22,11,22c0.153,0,0.306-0.035,0.447-0.105l4-2C15.786,19.725,16,19.379,16,19v-5.586l5.417-5.417 C21.787,7.627,22,7.113,22,6.59V4C22,3.447,21.553,3,21,3z M14.293,12.293C14.105,12.48,14,12.734,14,13v5.382l-2,1V13 c0-0.266-0.105-0.52-0.293-0.707L6,6.59V5h14.001l0.002,1.583L14.293,12.293z" />
  </svg>
);

export default IconFilter;
