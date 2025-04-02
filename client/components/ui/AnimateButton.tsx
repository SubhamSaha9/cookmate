import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { LoginColors } from "@/services/Colors";
import styles from "@/services/LoginStyle";
import { Ionicons } from "@expo/vector-icons";

export default function AnimateButton({
  loading,
  onPress,
  text,
  icon,
}: {
  loading?: boolean;
  onPress: () => void;
  text: string;
  icon?: any;
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {icon && <Ionicons name={icon} size={18} color={"white"} />}
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
