import React from "react";
import { Text, View } from "react-native";
import { strings } from "../../localization";
import styles from "./style";

export default ListHeaderComponent = ({ all, sup }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ListHeaderComponent}>
        <Text>{` ${sup} ${strings.Dashboard.of} ${all}  `}</Text>
      </View>
    </View>
  );
};
