import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import { Recipe } from "@/app/recipe-by-category";
import axios from "axios";
import HomeRecipeCard from "./HomeRecipeCard";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export default function LateseRecipe() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [loader, setLoader] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(`${BASE_URI}/recipe/all-recipe`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoader(false);
      if (!data.success) {
        Alert.alert("Error", data.message);
        return;
      }

      setRecipeList(data.data.slice(0, 10));
    } catch (error: any) {
      setLoader(false);
      console.log(error);
      Alert.alert("Error", error?.response?.data.message ?? error.message);
    }
  };

  useEffect(() => {
    token && getRecipes();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Recipes</Text>

      <FlatList
        data={recipeList}
        keyExtractor={(item) => item?._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <HomeRecipeCard recipe={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 17,
    fontFamily: "outfit-bold",
  },
});
