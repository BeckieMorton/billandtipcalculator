import React from "react";

export const CalculatePercentage = ({
  children,
  percentage,
  handleGetPercentage,
}) => {
  return (
    <div>
      <p>{children}</p>
      <select>
        <option value="5">Pretty avergage (5% Tip)</option>
        <option value="10">Good service (10% Tip)</option>
        <option value="15">Great! and feeling generous (15% Tip)</option>
      </select>
    </div>
  );
};
