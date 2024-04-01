import React from "react";

export const Total = ({ bill, tip }) => {
  return (
    <div>
      <p>Your bill was: ${bill}</p>
      <p>Your tip is: $ {tip} </p>
      <p>Your total comes to: ${bill + tip}</p>
    </div>
  );
};
