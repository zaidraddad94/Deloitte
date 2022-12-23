import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import More from "../screens/More";

const Tab = createBottomTabNavigator();

export default function MainRouts() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
