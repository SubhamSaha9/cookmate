import { View, Text, Modal, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/styles/Colors";

export default function Loading({
  visible = false,
  text = "Loading...",
}: {
  visible: boolean;
  text?: string;
}) {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <ActivityIndicator size={"large"} color={COLORS.PRIMARY} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000070",
  },
  text: {
    marginTop: 10,
    color: COLORS.PRIMARY,
    fontSize: 16,
    fontFamily: "outfit",
  },
  box: {
    backgroundColor: COLORS.BORDER,
    padding: 15,
    borderRadius: 12,
  },
});
