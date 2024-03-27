import React from "react";
import { useState } from "react";
import { Bill } from "./Bill";
import { MyService } from "./MyService";
import { FriendService } from "./FriendService";
import { Total } from "./Total";

export const Display = () => {
  const [bill, setBill] = useState(55);
  const [myService, setMyService] = useState();
  const [friendService, setFriendService] = useState();

  function onChangeBill(event) {
    setBill(event.target.value);
  }

  return (
    <div>
      <Bill bill={bill} handleChangeBill={onChangeBill} />
      <MyService />
      <FriendService />
      <Total bill={bill} />
    </div>
  );
};
