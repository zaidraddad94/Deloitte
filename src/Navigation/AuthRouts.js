import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

let LogIn = () => <Text>LogIn</Text>;

export default function AuthRouts() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" component={LogIn} />
    </Stack.Navigator>
  );
}
