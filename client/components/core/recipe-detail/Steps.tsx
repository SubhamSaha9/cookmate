import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "@/styles/RecipeStepsStyle";

export default function Steps({ steps }: { steps: string[] }) {
  return (
    <View>
      <Text style={styles.heading}>Steps</Text>

      <FlatList
        data={steps}
        renderItem={({ item, index }: { item: string; index: number }) => (
          <View style={styles.listContainer} key={index}>
            <Text style={styles.listIdx}>{index + 1}.</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
