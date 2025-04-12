import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Recipe } from "@/app/recipe-by-category";
import { COLORS } from "@/styles/Colors";
import DataBox from "./DataBox";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import axios from "axios";
import Loading from "@/components/ui/Loading";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export default function Intro({ recipe }: { recipe: Recipe }) {
  const { token } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);

  const saveRecipe = async () => {
    setLoading(true);
    try {
      const body = {
        recipeId: recipe._id,
        type: recipe.saved ? "unsave " : "save",
      };
      const { data } = await axios.post(
        `${BASE_URI}/recipe/save-recipe`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);
      if (!data.success) {
        Alert.alert("Error", data.message);
        return;
      }
      recipe.saved = !recipe.saved;
      Alert.alert(data.message);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      Alert.alert("Error", error?.response?.data.message ?? error.message);
    }
  };
  return (
    <View>
      <Image
        source={{
          uri: recipe?.image.replace(
            "ai-guru-lab-images/",
            "ai-guru-lab-images%2f"
          ),
        }}
        style={styles.image}
      />
      <Loading visible={loading} text="saving..." />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{recipe.recipeName}</Text>
        <TouchableOpacity
          onPress={() => saveRecipe()}
          style={{ padding: 5 }}
          hitSlop={{ top: 10, bottom: 15, left: 10, right: 10 }}
        >
          {recipe.saved ? (
            <Ionicons name="bookmark-sharp" size={24} color={COLORS.PRIMARY} />
          ) : (
            <Ionicons name="bookmark-outline" size={24} color={"black"} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>Description</Text>
      <Text style={styles.description}>{recipe.description}</Text>

      <View style={styles.dataBox}>
        <DataBox
          name={"leaf"}
          text={recipe.calories}
          unit="cal"
          type="Calories"
        />
        <DataBox name={"timer"} text={recipe.cookTime} unit="Min" type="Time" />
        <DataBox
          name={"people"}
          text={recipe.serveTo}
          unit="Serve"
          type="Serve"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
    borderRadius: 20,
  },
  heading: {
    fontFamily: "outfit",
    fontSize: 20,
    marginTop: 7,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  desc: {
    fontFamily: "outfit-bold",
    fontSize: 18,
    marginTop: 3,
  },
  description: {
    fontFamily: "outfit",
    fontSize: 17,
    color: COLORS.GRAY,
    marginTop: 2,
  },
  dataBox: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 5,
  },
});
