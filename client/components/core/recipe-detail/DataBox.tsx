import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/styles/Colors";

export default function DataBox({
  name,
  text,
  unit,
  type,
}: {
  name: any;
  text: number;
  unit: string;
  type: string;
}) {
  return (
    <View style={styles.container}>
      <Ionicons name={name} size={18} color={COLORS.PRIMARY} />
      <View>
        <Text style={styles.text}>
          {text} {unit}
        </Text>
        <Text>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: COLORS.SECONDARY,
    padding: 13,
    borderRadius: 15,
  },
  text: {
    fontFamily: "outfit",
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
});
