import React from "react";
import { Text, View } from "react-native";
import { strings } from "../../localization";
import styles from "./style";

function ProfileRow(props) {
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: strings.getLanguage() == "en" ? "row" : "row-reverse",
      }}
    >
      <Text adjustsFontSizeToFit style={styles.textName}>
        {props.rowName}
      </Text>

      <Text
        adjustsFontSizeToFit
        style={{
          ...styles.textValue,
          textAlign: strings.getLanguage() == "en" ? "right" : "left",
        }}
      >
        {props.rowValue}
      </Text>
    </View>
  );
}

export default ProfileRow;
