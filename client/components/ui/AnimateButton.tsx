import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { LoginColors } from "@/services/Colors";
import styles from "@/services/LoginStyle";

export default function AnimateButton({
  loading,
  onPress,
}: {
  loading: boolean;
  onPress: () => void;
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
        <Text style={styles.buttonText}>Login</Text>
      )}
    </TouchableOpacity>
  );
}
