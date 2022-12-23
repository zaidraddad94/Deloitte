import React from "react";
import { Image, View } from "react-native";
import images from "../../config/images";
import styles from "./style";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={images.logo} />
    </View>
  );
}
