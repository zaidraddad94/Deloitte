import React from "react";
import { View, Text } from "react-native";
import DatePicker from "react-native-date-picker";
import theme from "../../config/theme";
import styles from "./style";

function DatePickerComponent({ date, onDateChange, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <DatePicker
        date={date}
        onDateChange={onDateChange}
        mode={"date"}
        textColor={theme.Prime_Color}
        style={styles.picker}
      />
    </View>
  );
}
export default DatePickerComponent;
