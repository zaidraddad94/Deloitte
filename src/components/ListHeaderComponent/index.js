import React from "react";
import { Text, View } from "react-native";
import { strings } from "../../localization";
import styles from "./style";

export default ListHeaderComponent = ({ all, sub }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ListHeaderComponent}>
        <Text>{` ${sub} ${strings.Dashboard.of} ${all} `}</Text>
      </View>
    </View>
  );
};
