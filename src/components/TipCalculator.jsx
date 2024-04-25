import React from "react";
import { useState } from "react";
import { Bill } from "./Bill";
import { Total } from "./Total";
import { CalculatePercentage } from "./CalculatePercentage";
import { Reset } from "./Reset";

export const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendsPercentage, setFriendsPercentage] = useState(0);

  const tip = bill * ((friendsPercentage + myPercentage) / 100);

  function handleReset() {
    setBill(0);
    setMyPercentage(0);
    setFriendsPercentage(0);
  }
  return (
    <div>
      <h2>Tip Calculator 🍽</h2>
      <Bill bill={bill} onSetBill={setBill} />
      <CalculatePercentage
        percentage={myPercentage}
        onSetPercentage={setMyPercentage}
      >
        How did you rate the service?
      </CalculatePercentage>
      <CalculatePercentage
        percentage={friendsPercentage}
        onSetPercentage={setFriendsPercentage}
      >
        How did your friend rate the service?
      </CalculatePercentage>
      {bill > 0 && (
        <>
          <Total tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};
