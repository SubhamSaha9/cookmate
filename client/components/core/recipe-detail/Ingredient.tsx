import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Ingredient as IngredientProps } from "@/app/recipe-by-category";
import { COLORS } from "@/styles/Colors";

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

const styles = StyleSheet.create({
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  itemLen: {
    fontFamily: "outfit",
    fontSize: 15,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 7,
  },
  listIcon: {
    fontSize: 22,
    padding: 5,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 99,
    height: 38,
    width: 38,
    textAlign: "center",
  },
  listText: {
    fontFamily: "outfit",
    fontSize: 17,
  },
  listQt: {
    fontFamily: "outfit",
    fontSize: 17,
    color: COLORS.GRAY,
  },
});
