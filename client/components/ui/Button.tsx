import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@/styles/Colors";

export default function Button({
  text,
  onPress,
}: {
  text: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text
        style={{
          textAlign: "center",
          color: COLORS.WHITE,
          fontSize: 17,
          fontFamily: "outfit",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
});
