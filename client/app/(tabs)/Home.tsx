import { View } from "react-native";
import React from "react";
import { COLORS } from "@/styles/Colors";
import Intro from "@/components/core/home/Intro";
import CreateRecipe from "@/components/core/home/CreateRecipe";
import Category from "@/components/core/home/Category";

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
      <CreateRecipe />

      {/* Category */}
      <Category />
    </View>
  );
}
