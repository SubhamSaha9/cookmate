import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Recipe } from "@/app/recipe-by-category";
import { COLORS } from "@/styles/Colors";
import DataBox from "./DataBox";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import axios from "axios";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

export default function Intro({ recipe }: { recipe: Recipe }) {
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
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{recipe.recipeName}</Text>
        <TouchableOpacity onPress={saveRecipe}>
          <Ionicons name="bookmark-outline" size={24} color={"black"} />
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
    fontSize: 22,
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
