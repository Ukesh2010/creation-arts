/* eslint-disable react/prop-types */
import React from "react";

const IconDownload = ({
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
    <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
    <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
  </svg>
);

export default IconDownload;
