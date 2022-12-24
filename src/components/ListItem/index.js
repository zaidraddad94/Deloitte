import React from "react";
import { Image, Text, View } from "react-native";
import { strings } from "../../localization";
import styles from "./style";
import moment from "moment";
import "moment/locale/ar";

const ListItem = ({ image, name, created, species }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.imageView,
          flexDirection: strings.getLanguage() == "en" ? "row" : "row-reverse",
        }}
      >
        <Image style={styles.poster} source={{ uri: image }} />
        <View style={styles.column}>
          <Text
            style={{
              ...styles.name,
              textAlign: strings.getLanguage() == "en" ? "left" : "right",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              ...styles.species,
              textAlign: strings.getLanguage() == "en" ? "left" : "right",
            }}
          >
            {species}
          </Text>
          <Text
            style={{
              ...styles.dateText,
              textAlign: strings.getLanguage() == "ar" ? "left" : "right",
            }}
          >
            {moment(created).locale(strings.getLanguage()).fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
