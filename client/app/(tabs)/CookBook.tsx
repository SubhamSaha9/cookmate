import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "@/styles/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import { Recipe } from "../recipe-by-category";
import axios from "axios";
import RecipeCard from "@/components/common/RecipeCard";
import Loading from "@/components/ui/Loading";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export default function CookBook() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [loader, setLoader] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);

  const getRecipesByUser = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(`${BASE_URI}/recipe/user-recipe`, {
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

  useEffect(() => {
    token && getRecipesByUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CookBook</Text>

      <Loading visible={loader} />
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item._id}
        numColumns={2}
        refreshing={loader}
        onRefresh={getRecipesByUser}
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
    padding: 20,
    backgroundColor: COLORS.WHITE,
    height: "100%",
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 25,
  },
});
