/* eslint-disable react/prop-types */
import React from "react";

const IconChevronDown = ({
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
    <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
  </svg>
);

export default IconChevronDown;
