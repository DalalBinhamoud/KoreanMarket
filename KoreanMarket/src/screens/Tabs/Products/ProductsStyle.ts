import { StyleSheet } from "react-native";
import { theme } from "src/styles/theme";

export const ProductsStyle = StyleSheet.create({
  scrollViewHight: {
    height: "90%",
  },
  addBtn: {
    backgroundColor: theme.colors.tertiary,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus:{
    fontSize: 40,
    color: theme.colors.white,
  }
});
