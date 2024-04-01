import React from "react";

export const Bill = ({ bill, onSetBill }) => {
  return (bill = (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Enter your bill"
      />
    </div>
  ));
};
