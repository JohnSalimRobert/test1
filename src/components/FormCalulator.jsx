// PriceCalculatorForm.js
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FormCalulator = () => {
  const [academicLevel, setAcademicLevel] = useState('');
  const [deadline, setDeadline] = useState('');
  const [numPages, setNumPages] = useState(1);
  const [totalPrice, setTotalPrice] = useState(6.99);

  const handlePlusClick = () => {
    setNumPages(numPages + 1);
    setTotalPrice(totalPrice + 6.99);
  };

  const handleMinusClick = () => {
    if (numPages > 1) {
      setNumPages(numPages - 1);
      setTotalPrice(totalPrice - 6.99);
    }
  };

  return (
    <div className="price-calculator">
      <h1 className=''>Do Not Trust Us Test Us</h1>
      <p className="flash-text">(£6.99/Page For Everyone)</p>
      <div className='price-calculator-form'>
        <label>Academic Level</label>
        <input
          type="text"
          value={academicLevel}
          onChange={(e) => setAcademicLevel(e.target.value)}
          placeholder='Any'
        />
      
        <label>Deadline</label>
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          placeholder='Any'
        />
    <label>Number of Pages</label>
      <div className="page-counter">
        <div className='page-counter-content'>
          <button onClick={handleMinusClick}><FaMinus /></button>
          <input type='number' placeholder={numPages} value={numPages}></input>
          <button onClick={handlePlusClick}><FaPlus /></button>
        </div>
      </div>
      </div>
      <div className='price-calculator-footer'>
        <label>Total Price</label>
        <span>£ {totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FormCalulator;
