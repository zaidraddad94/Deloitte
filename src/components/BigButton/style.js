import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Secondary_Color,
    width: "80%",
    height: 50,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.Prime_Color,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
