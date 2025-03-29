import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { LoginColors } from "@/services/Colors";
import styles from "@/services/LoginStyle";

export default function AnimateButton({
  loading,
  onPress,
  text,
}: {
  loading: boolean;
  onPress: () => void;
  text: string;
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.button}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={LoginColors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
