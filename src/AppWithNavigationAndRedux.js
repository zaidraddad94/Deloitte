import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import WhatToOpen from "./Navigation/WhatToOpen";
import Splash from "./screens/Splash";

function AppWithNavigationAndRedux() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <NavigationContainer>
          <WhatToOpen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default AppWithNavigationAndRedux;
