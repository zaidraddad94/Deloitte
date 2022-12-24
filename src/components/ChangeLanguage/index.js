import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { strings } from "../../localization";
import styles from "./style";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions";

function ChangeLanguage() {
  const dispatch = useDispatch();

  const change = () => {
    console.log(strings.getLanguage());
    if (strings.getLanguage() == "en") {
      strings.setLanguage("ar");
      dispatch(changeLanguage({ language: "ar" }));
    } else {
      strings.setLanguage("en");
      dispatch(changeLanguage({ language: "en" }));
    }
  };

  return (
    <TouchableOpacity onPress={change} style={styles.container}>
      <Text> {strings.common.change}</Text>
    </TouchableOpacity>
  );
}
export default ChangeLanguage;
