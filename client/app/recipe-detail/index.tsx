import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Intro from "@/components/core/recipe-detail/Intro";
import { COLORS } from "@/styles/Colors";
import Ingredient from "@/components/core/recipe-detail/Ingredient";

export default function RecipeDetail() {
  const { jsonRecipe } = useLocalSearchParams();
  const recipe = JSON.parse(jsonRecipe as string);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View style={styles.container}>
          <Intro recipe={recipe} />

          {/* Ingredient list */}
          <Ingredient ingredients={recipe?.ingredients} />
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
