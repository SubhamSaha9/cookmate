import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { COLORS } from "@/styles/Colors";
import RecipeCard from "@/components/common/RecipeCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import Loading from "@/components/ui/Loading";

export interface Ingredient {
  ingredient: string;
  icon: string;
  quantity: string;
  _id: string;
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
  category?: string[];
  email?: string;
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
      { _id: "1", ingredient: "Flour", icon: "🥣", quantity: "1 cup" },
      { _id: "1", ingredient: "Milk", icon: "🥛", quantity: "1 cup" },
      { _id: "1", ingredient: "Egg", icon: "🥚", quantity: "1" },
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
      { _id: "1", ingredient: "Bread", icon: "🍞", quantity: "2 slices" },
      { _id: "1", ingredient: "Avocado", icon: "🥑", quantity: "1" },
      { _id: "1", ingredient: "Lemon Juice", icon: "🍋", quantity: "1 tsp" },
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
      { _id: "1", ingredient: "Rolled Oats", icon: "🌾", quantity: "1/2 cup" },
      { _id: "1", ingredient: "Milk", icon: "🥛", quantity: "1 cup" },
      { _id: "1", ingredient: "Banana", icon: "🍌", quantity: "1 sliced" },
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
      { _id: "1", ingredient: "Eggs", icon: "🥚", quantity: "2" },
      { _id: "1", ingredient: "Butter", icon: "🧈", quantity: "1 tbsp" },
      { _id: "1", ingredient: "Salt", icon: "🧂", quantity: "to taste" },
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
      { _id: "1", ingredient: "Greek Yogurt", icon: "🍶", quantity: "1 cup" },
      {
        _id: "2",
        ingredient: "Mixed Berries",
        icon: "🫐",
        quantity: "1/2 cup",
      },
      { _id: "3", ingredient: "Granola", icon: "🥣", quantity: "1/3 cup" },
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

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;
export default function RecipeByCategory() {
  const { token } = useSelector((state: RootState) => state.auth);
  const { categoryName, categoryId } = useLocalSearchParams();
  const [recipeList, setRecipeList] = useState<Recipe[]>(data);
  const [loader, setLoader] = useState<boolean>(false);

  const getCaategoryList = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(`${BASE_URI}/recipe/${categoryId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoader(false);
      if (!data.success) {
        Alert.alert("Error", data.message);
        return;
      }

      setRecipeList(data.data);
    } catch (error: any) {
      setLoader(false);
      console.log(error);
      Alert.alert("Error", error?.response?.data.message ?? error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse {categoryName} Recipes</Text>
      <Loading visible={loader} text={`Fetching ${categoryName}`} />
      <View style={styles.flatlistContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: "100%",
  },
  flatlistContainer: {
    paddingTop: 10,
    padding: 20,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 22,
    paddingTop: 13,
    paddingLeft: 45,
  },
});
