import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { COLORS } from "@/styles/Colors";

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

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 0.3,
  },

  listIdx: {
    fontFamily: "outfit",
    fontSize: 17,
    padding: 10,
    width: 38,
    textAlign: "center",
    borderRadius: 7,
    backgroundColor: COLORS.SECONDARY,
  },
  listText: {
    fontFamily: "outfit",
    fontSize: 17,
    flex: 1,
  },
});
