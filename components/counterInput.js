import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';

const CounterInput = ({className}) => (
  <div className={`counter-input-container ${className}`}>
    <input type="number" className="form-control input" value='2'/>
    <button className="btn add-btn"><FontAwesomeIcon icon={faPlus}/></button>
    <button className="btn remove-btn"><FontAwesomeIcon icon={faMinus}/></button>
  </div>
);

export default CounterInput;
