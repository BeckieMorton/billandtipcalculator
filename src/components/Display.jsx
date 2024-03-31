import React from "react";
import { useState } from "react";
import { Bill } from "./Bill";
import { Total } from "./Total";
import { CalculatePercentage } from "./CalculatePercentage";

export const Display = () => {
  const [bill, setBill] = useState(55);
  const [percentage, setPercentage] = useState();
  const [total, setTotal] = useState();

  function onChangeBill(event) {
    setBill(event.target.value);
  }

  function onGetPercentage(event) {
    setPercentage(event.target.value);
  }

  function onCalculateTotal() {
    setTotal((bill * percentage) / 100);
  }
  return (
    <div>
      <Bill bill={bill} handleChangeBill={onChangeBill} />
      <CalculatePercentage
        percentage={percentage}
        handleGetPercentage={onGetPercentage}
      >
        How did you rate the service?
      </CalculatePercentage>
      <CalculatePercentage
        percentage={percentage}
        handleGetPercentage={onGetPercentage}
      >
        How did your friend rate the service?
      </CalculatePercentage>
      <Total
        handleTotal={onCalculateTotal}
        bill={bill}
        percentage={percentage}
      />
    </div>
  );
};
