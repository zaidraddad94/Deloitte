import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rows: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

export default styles;
