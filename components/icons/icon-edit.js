/* eslint-disable react/prop-types */
import React from "react";

const IconEdit = ({
  fill = "inherit",
  width = "1.5rem",
  height = "1.5rem",
  className = "",
  viewBox = "0 0 24 24",
  style,
}) => (
  <svg
    width={width}
    fill={fill}
    height={height}
    viewBox={viewBox}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zM16.045 4.401l1.587 1.585-1.59 1.584-1.586-1.585L16.045 4.401zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zM4 20H20V22H4z" />
  </svg>
);

export default IconEdit;
