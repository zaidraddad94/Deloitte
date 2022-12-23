import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import Splash from "../screens/Splash";
import AuthRouts from "./AuthRouts";
import MainRouts from "./MainRouts";

function WhatToOpen() {
  const user = useSelector((state) => state.auth);
  let [showSplash, setShowSplash] = useState(false);

  // to toggle splash screen but not on the first load
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setShowSplash(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 1000);
    }
  }, [user.ID]);

  //to show and hide splash screen when change lang or log in and log out
  if (showSplash) {
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
