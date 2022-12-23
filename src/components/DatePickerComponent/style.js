import { StyleSheet } from "react-native";
import theme from "../../config/theme";

let styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: "80%",
    height: 140,
    marginBottom: 20,
    flexDirection: "column",
    backgroundColor: theme.White_Color,
    alignItems: "center",
  },
  picker: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#dadae8",
  },
  title: {
    fontSize: 14,
    paddingVertical: 10,
  },
});

export default styles;
