import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import More from "../screens/More";
import theme from "../config/theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./style";
import { strings } from "../localization";

const Tab = createBottomTabNavigator();

export default function MainRouts() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        options={{
          title:strings.navBar.dashboard,
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabel: strings.navBar.dashboard,
          tabBarActiveTintColor: theme.Secondary_Color,
          tabBarInactiveTintColor: theme.Gray_Color,
          tabBarIcon: ({ color, size }) => (
            <Icon name={"home"} size={size * 1.4} color={color} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        options={{
          title:strings.navBar.more,
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabel: strings.navBar.more,
          tabBarActiveTintColor: theme.Secondary_Color,
          tabBarInactiveTintColor: theme.Gray_Color,
          tabBarIcon: ({ color, size }) => (
            <Icon name={"person"} size={size * 1.4} color={color} />
          ),
        }}
        name="More"
        component={More}
      />

    </Tab.Navigator>
  );
}
