import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
    headingContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        fontFamily: "outfit-bold",
        fontSize: 18,
    },
    itemLen: {
        fontFamily: "outfit",
        fontSize: 15,
    },
    listContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    listView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 7,
    },
    listIcon: {
        fontSize: 22,
        padding: 5,
        backgroundColor: COLORS.SECONDARY,
        borderRadius: 99,
        height: 38,
        width: 38,
        textAlign: "center",
    },
    listText: {
        fontFamily: "outfit",
        fontSize: 17,
    },
    listQt: {
        fontFamily: "outfit",
        fontSize: 17,
        color: COLORS.GRAY,
    },
});

export default styles;