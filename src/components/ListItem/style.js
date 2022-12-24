import { StyleSheet } from "react-native";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 10,
    width: null,
    backgroundColor: theme.White_Color,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  poster: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  column: {
    flexDirection: "column",
    height: null,
    flex: 1,
  },
  dateText: {
    color: theme.Secondary_Color,
    fontWeight: "bold",
    fontSize: 14,
    paddingTop: 38,
  },
  imageView: { flexDirection: "row", flex: 1 },
  name: { fontWeight: "bold", fontSize: 15, paddingHorizontal: 10 },
  species: {
    color: theme.Gray_Color,
    paddingTop: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default styles;
