import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Recipe } from "@/app/recipe-by-category";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/styles/Colors";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe?.image }} style={styles.image} />
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,0.8)",
        ]}
        style={styles.background}
      >
        <View>
          <Text style={styles.imageText}>{recipe?.recipeName}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageText: {
    color: COLORS.WHITE,
    fontFamily: "outfit",
    fontSize: 16,
  },
});
