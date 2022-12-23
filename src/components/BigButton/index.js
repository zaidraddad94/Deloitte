import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./style";

function BigButton({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}> {text}</Text>
    </TouchableOpacity>
  );
}
export default BigButton;
