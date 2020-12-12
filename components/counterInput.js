import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

const CounterInput = ({ className, min = 1, max = 99, value, onChange }) => {
  const onPlusClick = () => {
    onChange(value + 1);
  };
  const onMinusClick = () => {
    onChange(value - 1);
  };

  return (
    <div className={`counter-input-container ${className}`}>
      <input type="number" className="form-control input" value={value} />
      <button
        className="btn add-btn"
        disabled={value >= max}
        onClick={onPlusClick}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button
        className="btn remove-btn"
        disabled={value <= min}
        onClick={onMinusClick}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};
export default CounterInput;
