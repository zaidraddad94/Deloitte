import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "../../config/theme";
import { strings } from "../../localization";
import styles from "./style";
function InputWithIcons({
  icon1,
  icon2,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  icon2OnPress = () => {},
  error,
  keyboardType,
}) {
  return (
    <View
      style={{
        ...styles.inputView,
        backgroundColor: error ? theme.Error_Color : theme.White_Color,
        flexDirection: strings.getLanguage() == "en" ? "row" : "row-reverse",

      }}
    >
      {icon1 ? <Icon name={icon1} size={24} /> : null}
      <TextInput
        textAlign={strings.getLanguage() == "en" ?'left' : "right"}
        secureTextEntry={secureTextEntry}
        style={styles.TextInput}
        placeholder={placeholder}
        placeholderTextColor={theme.Prime_Color}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
      {icon2 ? (
        <Icon name={icon2} size={24} onPress={() => icon2OnPress()} />
      ) : null}
    </View>
  );
}
export default InputWithIcons;
