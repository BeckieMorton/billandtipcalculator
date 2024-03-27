import React from "react";

export const Bill = ({ bill, handleChangeBill }) => {
  return (bill = (
    <div>
      <p>How much was the bill? </p>
      <input
        type="number"
        value={bill}
        onChange={handleChangeBill}
        placeholder="Enter your bill"
      />
    </div>
  ));
};
