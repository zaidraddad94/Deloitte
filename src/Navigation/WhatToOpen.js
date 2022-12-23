import React, { useState } from "react";
import Splash from "../screens/Splash";
import AuthRouts from "./AuthRouts";
import MainRouts from "./MainRouts";

function WhatToOpen() {
  let [loading, setLoading] = useState(false);

  //to show and hide splash screen when change lang or log in and log out
  if (loading) {
    return <Splash />;
  }

  //this will be decided if there is user logged in or not
  if (true) {
    return <MainRouts />;
  } else {
    return <AuthRouts />;
  }
}

export default WhatToOpen;
