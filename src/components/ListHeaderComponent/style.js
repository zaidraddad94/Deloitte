import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ListHeaderComponent: {
    width: width / 3.5,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
});

export default styles;
