import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import React, { useRef, useState } from "react";
import { COLORS } from "@/styles/Colors";
import AnimateButton from "@/components/ui/AnimateButton";
import { recipeGenerator } from "@/utils/AIModel";
import PROMPT from "@/utils/prompt";
import Loading from "@/components/ui/Loading";

interface recipeOptionProps {
  recipeName: string;
  description: string;
  ingredients: [string];
}

export default function CreateRecipe() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [recipeOptions, setRecipeOptions] = useState<recipeOptionProps[]>([]);
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const onGenerate = async () => {
    setLoading(true);
    try {
      if (!userInput) {
        Alert.alert("Please enter details");
        return;
      }
      const { response } = await recipeGenerator.sendMessage(
        userInput + PROMPT.GENERATE_RECIPE_OPTION_PROMPT
      );
      const content = response.text();
      content && setRecipeOptions(JSON.parse(content));
      setLoading(false);
      setUserInput("");
      actionSheetRef.current?.show();
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      Alert.alert("Error", "Something went wrong while generating suggessions");
    }
  };
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
          onPress={() => onGenerate()}
          icon={"sparkles"}
          loading={loading}
        />
      </View>
      {/* <Loading visible={loader} /> */}
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.heading}>Select Recipe</Text>
          <View>
            {recipeOptions.length > 0 &&
              recipeOptions.map((option, i) => (
                <View key={i} style={styles.recipeOptionContainer}>
                  <Text style={styles.recipeOptionName}>
                    {option.recipeName}
                  </Text>
                  <Text style={styles.recipeOptionDesc}>
                    {option.description}
                  </Text>
                </View>
              ))}
          </View>
        </View>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 22,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  panImage: {
    width: 75,
    height: 75,
  },
  heading: {
    fontFamily: "outfit",
    fontSize: 20,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "outfit",
    fontSize: 16,
    marginTop: 5,
  },
  inputText: {
    backgroundColor: COLORS.WHITE,
    width: "100%",
    borderRadius: 15,
    height: 100,
    marginTop: 8,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 17,
  },
  actionSheetContainer: {
    padding: 25,
  },
  recipeOptionContainer: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 15,
    marginTop: 15,
  },
  recipeOptionName: {
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
  recipeOptionDesc: {
    fontFamily: "outfit",
    color: COLORS.GRAY,
  },
});
