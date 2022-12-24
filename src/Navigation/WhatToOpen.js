import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { strings } from "../localization";
import Splash from "../screens/Splash";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

function WhatToOpen() {
  const isLoggedIn = !!useSelector((state) => state?.auth?.ID);
  const language = useSelector((state) => state.language.language);
  const [showSplash, setShowSplash] = useState(false);

  // to toggle splash screen
  useEffect(() => {
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoggedIn, language]);

  useEffect(() => {
    language && strings.setLanguage(language);
  }, []);

  //to show and hide splash screen when change lang or log in and log out
  if (showSplash) {
    return <Splash />;
  }

  //this will be decided if there is user logged in or not
  if (isLoggedIn) {
    return <MainRoutes />;
  } else {
    return <AuthRoutes />;
  }
}

export default WhatToOpen;
