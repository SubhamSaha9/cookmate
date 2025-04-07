import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Intro from "@/components/core/recipe-detail/Intro";
import { COLORS } from "@/styles/Colors";
import Ingredients from "@/components/core/recipe-detail/Ingredients";

export default function RecipeDetail() {
  const { jsonRecipe } = useLocalSearchParams();
  const recipe = JSON.parse(jsonRecipe as string);
  return (
    <View style={styles.container}>
      <Intro recipe={recipe} />

      {/* Ingredient list */}
      <Ingredients />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.WHITE,
    padding: 20,
    paddingTop: 10,
  },
});
