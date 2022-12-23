import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import theme from "../../config/theme";
const { height, width } = Dimensions.get("window");

let styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: theme.Prime_Color,
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
    height:width/2,
    width:width/2
  }
});

export default styles;
