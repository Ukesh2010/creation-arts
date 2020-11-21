/* eslint-disable react/prop-types */
import React from "react";

const IconSortDown = ({
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
    <path d="M6 20L10 16 7 16 7 4 5 4 5 16 2 16zM11 8H20V10H11zM11 12H18V14H11zM11 4H22V6H11zM11 16H16V18H11z" />
  </svg>
);

export default IconSortDown;
