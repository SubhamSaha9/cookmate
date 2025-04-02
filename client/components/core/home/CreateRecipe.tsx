import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/services/Colors";
import AnimateButton from "@/components/ui/AnimateButton";

export default function CreateRecipe() {
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/pan.gif")}
        style={styles.panImage}
      />

      <Text style={styles.heading}>
        Warm up your stove, and let's get cooking!
      </Text>
      <Text style={styles.subHeading}>Make something for your LOVE</Text>

      <TextInput
        placeholder="What you want to create? Add ingredients etc."
        multiline={true}
        numberOfLines={3}
        style={styles.inputText}
        onChangeText={(v) => setUserInput(v)}
        value={userInput}
      />
      <View style={{ width: "100%" }}>
        <AnimateButton
          text="Generate Recipe"
          onPress={() => console.log("hello")}
          icon={"sparkles"}
          loading={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 12,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 22,
    display: "flex",
    alignItems: "center",
  },
  panImage: {
    width: 80,
    height: 80,
  },
  heading: {
    fontFamily: "outfit",
    fontSize: 20,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "outfit",
    fontSize: 16,
    marginTop: 6,
  },
  inputText: {
    backgroundColor: COLORS.WHITE,
    width: "100%",
    borderRadius: 15,
    height: 110,
    marginTop: 8,
    padding: 15,
    textAlignVertical: "top",
    fontSize: 18,
  },
});
