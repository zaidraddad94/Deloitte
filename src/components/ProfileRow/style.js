import { StyleSheet } from "react-native";
import theme from "../../config/theme";

let styles = StyleSheet.create({
  container: {
    height: 50,
    paddingTop: 10,
  },
  textValue: {
    flex: 3,
    fontSize: 15,
    fontWeight: "bold",
    color: theme.Gray_Color,
  },
  textName: {
    flex: 2,
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    color: theme.Secondary_Color,
  },
});

export default styles;
