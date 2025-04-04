import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: "100%",
    padding: 25,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 30,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 99,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  username: {
    fontFamily: "outfit-bold",
    fontSize: 24,
    marginTop: 8,
  },
  email: {
    fontFamily: "outfit",
    fontSize: 17,
    color: COLORS.GRAY,
  },
  listcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: COLORS.SECONDARY,
    marginBottom: 10,
    borderRadius: 99,
  },
  listimage: {
    height: 40,
    width: 40,
  },
  listtext: {
    fontFamily: "outfit",
    fontSize: 18,
  },
});

export default styles;