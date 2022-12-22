import React from "react";
import AuthRouts from "./AuthRouts";
import MainRouts from "./MainRouts";

function WhatToOpen() {
  if (true) {
    return <MainRouts />;
  } else {
    return <AuthRouts />;
  }
}

export default WhatToOpen;
