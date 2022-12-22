import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import WhatToOpen from "./WhatToOpen";

function AppWithNavication() {
  return (
    <NavigationContainer>
      <WhatToOpen />
    </NavigationContainer>
  );
}

export default AppWithNavication;
