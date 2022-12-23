import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../screens/Registration";

const Stack = createNativeStackNavigator();

export default function AuthRouts() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}
