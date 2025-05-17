import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
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
  saved: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
const BASE_URI = process.env.EXPO_PUBLIC_API_URL;
export default function RecipeByCategory() {
  const { token } = useSelector((state: RootState) => state.auth);
  const { categoryName, categoryId } = useLocalSearchParams();
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const getRecipeByCategory = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(
        `${BASE_URI}/recipe/category/${categoryId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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

  useEffect(() => {
    token && getRecipeByCategory();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse {categoryName} Recipes</Text>
      <Loading visible={loader} text={`Fetching ${categoryName}`} />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={recipeList}
          keyExtractor={(item) => item._id}
          numColumns={2}
          refreshing={loader}
          onRefresh={getRecipeByCategory}
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
