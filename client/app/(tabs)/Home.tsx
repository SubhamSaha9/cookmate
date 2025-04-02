import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "@/services/Colors";
import Intro from "@/components/core/home/Intro";
import CreateRecipe from "@/components/core/home/CreateRecipe";

export default function Home() {
  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: COLORS.WHITE,
        padding: 15,
      }}
    >
      {/* Intro */}
      <Intro />
      {/* Recipe generator UI */}
      <CreateRecipe />
      {/* Category */}
    </ScrollView>
  );
}
