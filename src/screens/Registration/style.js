import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/theme";

const { height, width } = Dimensions.get("window");

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "center",
  },
  image: {
    flex: .4,
    marginTop: 10,
    marginBottom: 10,
    width: width - 100,
    resizeMode: "contain",
  },

});

export default styles;
