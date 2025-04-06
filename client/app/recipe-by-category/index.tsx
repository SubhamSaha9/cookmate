import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { COLORS } from "@/styles/Colors";
import RecipeCard from "@/components/common/RecipeCard";

interface Ingredient {
  ingredient: string;
  icon: string;
  quantity: string;
  _id?: string;
}
export interface Recipe {
  _id: string;
  recipeName: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  calories: number;
  cookTime: number;
  serveTo: number;
  imagePrompt?: string;
  image: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
const data = [
  {
    _id: "1",
    recipeName: "Classic Pancakes",
    description: "Fluffy and golden pancakes perfect for a hearty breakfast.",
    ingredients: [
      { ingredient: "Flour", icon: "🥣", quantity: "1 cup" },
      { ingredient: "Milk", icon: "🥛", quantity: "1 cup" },
      { ingredient: "Egg", icon: "🥚", quantity: "1" },
    ],
    steps: [
      "Mix all dry ingredients in a bowl.",
      "Add milk and egg, then whisk until smooth.",
      "Pour batter onto hot griddle and cook until golden.",
    ],
    calories: 320,
    cookTime: 15,
    serveTo: 2,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "2",
    recipeName: "Avocado Toast",
    description:
      "A quick and nutritious toast topped with smashed avocado and seasoning.",
    ingredients: [
      { ingredient: "Bread", icon: "🍞", quantity: "2 slices" },
      { ingredient: "Avocado", icon: "🥑", quantity: "1" },
      { ingredient: "Lemon Juice", icon: "🍋", quantity: "1 tsp" },
    ],
    steps: [
      "Toast the bread slices.",
      "Mash avocado and mix with lemon juice.",
      "Spread over toast and season to taste.",
    ],
    calories: 250,
    cookTime: 10,
    serveTo: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww",
  },
  {
    _id: "3",
    recipeName: "Oatmeal Bowl",
    description:
      "Warm oats topped with fruits and nuts for a balanced start to the day.",
    ingredients: [
      { ingredient: "Rolled Oats", icon: "🌾", quantity: "1/2 cup" },
      { ingredient: "Milk", icon: "🥛", quantity: "1 cup" },
      { ingredient: "Banana", icon: "🍌", quantity: "1 sliced" },
    ],
    steps: [
      "Boil oats in milk until soft.",
      "Pour into a bowl and top with banana and nuts.",
      "Drizzle with honey if desired.",
    ],
    calories: 300,
    cookTime: 8,
    serveTo: 1,
    image:
      "https://images.unsplash.com/photo-1610406765661-57646c40da59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "4",
    recipeName: "Scrambled Eggs",
    description:
      "Soft and creamy scrambled eggs made with butter and seasoning.",
    ingredients: [
      { ingredient: "Eggs", icon: "🥚", quantity: "2" },
      { ingredient: "Butter", icon: "🧈", quantity: "1 tbsp" },
      { ingredient: "Salt", icon: "🧂", quantity: "to taste" },
    ],
    steps: [
      "Crack eggs into a bowl and whisk.",
      "Melt butter in pan over medium heat.",
      "Pour eggs in and stir continuously until cooked.",
    ],
    calories: 220,
    cookTime: 6,
    serveTo: 1,
    image:
      "https://images.unsplash.com/photo-1562918005-50afb98e5d32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "5",
    recipeName: "Berry Yogurt Parfait",
    description:
      "Layers of yogurt, berries, and granola for a refreshing breakfast treat.",
    ingredients: [
      { ingredient: "Greek Yogurt", icon: "🍶", quantity: "1 cup" },
      { ingredient: "Mixed Berries", icon: "🫐", quantity: "1/2 cup" },
      { ingredient: "Granola", icon: "🥣", quantity: "1/3 cup" },
    ],
    steps: [
      "Spoon yogurt into a glass.",
      "Add a layer of berries, then granola.",
      "Repeat layers and serve chilled.",
    ],
    calories: 280,
    cookTime: 5,
    serveTo: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1693267085608-aa50fa091f6c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function RecipeByCategory() {
  const { categoryName, categoryId } = useLocalSearchParams();
  const [recipeList, setRecipeList] = useState<Recipe[]>(data);

  const getCaategoryList = async () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse {categoryName} Recipes</Text>
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            <RecipeCard recipe={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    padding: 20,
    backgroundColor: COLORS.WHITE,
    height: "100%",
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 22,
  },
});
