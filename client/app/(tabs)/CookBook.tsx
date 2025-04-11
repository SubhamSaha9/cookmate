import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "@/styles/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import { Recipe } from "../recipe-by-category";
import axios from "axios";
import RecipeCard from "@/components/common/RecipeCard";
import Loading from "@/components/ui/Loading";
import { Ionicons } from "@expo/vector-icons";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export default function CookBook() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [loader, setLoader] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [activeTab, setActiveTab] = useState<number>(1);

  const getRecipesByUserOrSaved = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(
        `${BASE_URI}/recipe/${
          activeTab === 1 ? "user-recipe" : "saved-recipe"
        }`,
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
    token && getRecipesByUserOrSaved();
  }, [activeTab]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CookBook</Text>

      <View style={styles.tab}>
        <TouchableOpacity
          style={[styles.tabContainer, { opacity: activeTab === 1 ? 1 : 0.4 }]}
          onPress={() => setActiveTab(1)}
        >
          <Ionicons name="sparkles-sharp" size={24} color={"black"} />
          <Text style={styles.tabText}>My Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabContainer, { opacity: activeTab === 2 ? 1 : 0.4 }]}
          onPress={() => setActiveTab(2)}
        >
          <Ionicons name="bookmark" size={24} color={"black"} />
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
      </View>

      <Loading visible={loader} />
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item._id}
        numColumns={2}
        refreshing={loader}
        onRefresh={getRecipesByUserOrSaved}
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
  tab: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    marginBottom: 6,
  },
  tabContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  tabText: {
    fontFamily: "outfit",
    fontSize: 20,
  },
});
