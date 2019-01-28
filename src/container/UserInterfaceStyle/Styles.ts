import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  userHeader: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  userHeaderLeft: {
    flex: 1
  },
  userHeaderTitle: {
    flex: 5,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 50
  },
  userHeaderRight: {
    flex: 1
  },
  userBody: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  titleFont: {
    fontSize:18, 
    fontWeight:"bold"
  }
});
