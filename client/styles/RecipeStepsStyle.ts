import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    heading: {
        fontFamily: "outfit-bold",
        fontSize: 18,
    },
    listContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        borderWidth: 0.3,
    },

    listIdx: {
        fontFamily: "outfit",
        fontSize: 17,
        padding: 10,
        width: 38,
        textAlign: "center",
        borderRadius: 7,
        backgroundColor: COLORS.SECONDARY,
    },
    listText: {
        fontFamily: "outfit",
        fontSize: 17,
        flex: 1,
    },
});

export default styles;