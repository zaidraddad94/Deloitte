import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../screens/Registration";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}