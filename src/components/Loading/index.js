import React from "react";
import { View, ActivityIndicator } from "react-native";
import theme from "../../config/theme";
import styles from "./style";

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.Secondary_Color} />
    </View>
  );
}

export default Loading;
