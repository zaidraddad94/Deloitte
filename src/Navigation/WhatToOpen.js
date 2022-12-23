import React, { useState } from "react";
import { useSelector } from "react-redux";

import Splash from "../screens/Splash";
import AuthRouts from "./AuthRouts";
import MainRouts from "./MainRouts";

function WhatToOpen() {
  const user = useSelector((state) => state.auth);

  //to show and hide splash screen when change lang or log in and log out
  if (false) {
    return <Splash />;
  }

  //this will be decided if there is user logged in or not
  if (user.ID) {
    return <MainRouts />;
  } else {
    return <AuthRouts />;
  }
}

export default WhatToOpen;
