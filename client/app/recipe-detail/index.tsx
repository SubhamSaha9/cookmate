import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Intro from "@/components/core/recipe-detail/Intro";
import { COLORS } from "@/styles/Colors";
import Ingredient from "@/components/core/recipe-detail/Ingredient";
import Steps from "@/components/core/recipe-detail/Steps";
import { Recipe } from "../recipe-by-category";

export default function RecipeDetail() {
  const { jsonRecipe } = useLocalSearchParams();
  const recipe: Recipe = JSON.parse(jsonRecipe as string);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View style={styles.container}>
          <Intro recipe={recipe} />

          {/* Ingredient list */}
          <Ingredient ingredients={recipe?.ingredients} />

          {/* Steps */}
          <Steps steps={recipe?.steps} />
        </View>
      }
    />
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
