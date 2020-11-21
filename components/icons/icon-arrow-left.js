/* eslint-disable react/prop-types */
import React from "react";

const IconArrowLeft = ({
  fill = "inherit",
  width = "1.5rem",
  height = "1.5rem",
  className = "",
  viewBox = "0 0 24 24",
  onClick,
}) => (
  <svg
    onClick={onClick}
    width={width}
    fill={fill}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"/>
  </svg>
);

export default IconArrowLeft;
