import React from "react";
import { Image, View, Text } from "react-native";
import BigButton from "../../components/BigButton";
import images from "../../config/images";
import styles from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";

export default function More() {
  const dispatch = useDispatch();

  let logOut = () => {
    dispatch(logout());
  };

  return (
    <View style={{}}>
      <Text>more</Text>
      <BigButton onPress={logOut} text={"Create My Account"} />
    </View>
  );
}
