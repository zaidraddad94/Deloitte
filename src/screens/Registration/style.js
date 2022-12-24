import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "center",
  },
  image: {
    flex: 0.4,
    marginTop: 10,
    marginBottom: 10,
    width: width - 100,
    resizeMode: "contain",
  },
});

export default styles;
