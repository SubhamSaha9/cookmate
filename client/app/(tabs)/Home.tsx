import { FlatList, ScrollView, View } from "react-native";
import React from "react";
import { COLORS } from "@/styles/Colors";
import Intro from "@/components/core/home/Intro";
import CreateRecipe from "@/components/core/home/CreateRecipe";
import Category from "@/components/core/home/Category";
import LateseRecipe from "@/components/core/home/LateseRecipe";

export default function Home() {
  return (
    <FlatList
      style={{ height: "100%", backgroundColor: COLORS.WHITE }}
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <ScrollView
          style={{
            padding: 15,
          }}
        >
          {/* Intro */}
          <Intro />

          {/* Recipe generator UI */}
          <CreateRecipe />

          {/* Category */}
          <Category />

          <LateseRecipe />
        </ScrollView>
      }
    />
  );
}
