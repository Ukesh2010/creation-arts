import React from "react";
import IconPlus from './icons/icon-plus';
import IconMinus from './icons/icon-minus';

const CounterInput = ({className}) => (
  <div className={`counter-input-container ${className}`}>
    <input type="number" className="form-control input" value='2'/>
    <button className="btn add-btn"><IconPlus/></button>
    <button className="btn remove-btn"><IconMinus/></button>
  </div>
);

export default CounterInput;
