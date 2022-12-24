import React from "react";
import { Text, View } from "react-native";
import { strings } from "../../localization";
import styles from "./style";

function ProfileRow({ rowName, rowValue }) {
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: strings.getLanguage() == "en" ? "row" : "row-reverse",
      }}
    >
      <Text
        adjustsFontSizeToFit
        style={{
          ...styles.textName,
          textAlign: strings.getLanguage() == "en" ? "left" : "right",
        }}
      >
        {rowName}
      </Text>

      <Text
        adjustsFontSizeToFit
        style={{
          ...styles.textValue,
          textAlign: strings.getLanguage() == "en" ? "right" : "left",
        }}
      >
        {rowValue}
      </Text>
    </View>
  );
}

export default ProfileRow;
