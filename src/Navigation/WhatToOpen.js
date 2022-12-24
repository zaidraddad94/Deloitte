import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { strings } from "../localization";

import Splash from "../screens/Splash";
import AuthRouts from "./AuthRouts";
import MainRouts from "./MainRouts";

function WhatToOpen() {
  const user = useSelector((state) => state.auth);
  const language = useSelector((state) => state.language.language);

  let [showSplash, setShowSplash] = useState(false);

  // to toggle splash screen 
  useEffect(() => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, [user.ID, language]);

  useEffect(() => {
    language && strings.setLanguage(language);
  }, []);

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
