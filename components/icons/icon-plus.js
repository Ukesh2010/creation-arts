/* eslint-disable react/prop-types */
import React from "react";

const IconPlus = ({
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
    <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
  </svg>
);

export default IconPlus;
