import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "@/services/Colors";
import Intro from "@/components/core/Intro";

export default function Home() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: COLORS.WHITE,
        padding: 15,
      }}
    >
      {/* Intro */}
      <Intro />
      {/* Recipe generator UI */}
      {/* Category */}
    </View>
  );
}
