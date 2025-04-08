import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ingredient as IngredientProps } from "@/app/recipe-by-category";
import styles from "@/styles/RecipeIngredientStyle";

export default function Ingredient({
  ingredients,
}: {
  ingredients: IngredientProps[];
}) {
  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Ingredients</Text>
        <Text style={styles.itemLen}>{ingredients?.length} items</Text>
      </View>

      <FlatList
        data={ingredients}
        keyExtractor={(item) => item._id}
        renderItem={({ item }: { item: IngredientProps }) => (
          <View style={styles.listContainer}>
            <View style={styles.listView}>
              <Text style={styles.listIcon}>{item?.icon}</Text>
              <Text style={styles.listText}>{item?.ingredient}</Text>
            </View>
            <Text style={styles.listQt}>{item?.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
}
