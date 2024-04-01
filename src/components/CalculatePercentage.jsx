import React from "react";

export const CalculatePercentage = ({
  children,
  percentage,
  onSetPercentage,
}) => {
  return (
    <div>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Not great (0% Tip)</option>
        <option value="10">Good service (10% Tip)</option>
        <option value="15">Great! and feeling generous (15% Tip)</option>
      </select>
    </div>
  );
};
