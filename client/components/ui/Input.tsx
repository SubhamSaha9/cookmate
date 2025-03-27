import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "@/services/LoginStyle";
import { Ionicons } from "@expo/vector-icons";
import { LoginColors } from "@/services/Colors";

export default function Input({
  value,
  onChangeText,
  keyboardType,
  placeholder,
  icon,
  type,
  secureTextEntry,
  setHidePassword,
}: {
  value: string;
  onChangeText: any;
  keyboardType?: any;
  placeholder: string;
  icon: any;
  type?: string;
  secureTextEntry?: boolean;
  setHidePassword?: any;
}) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name={icon}
        size={20}
        color={LoginColors.primary}
        style={styles.inputIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={LoginColors.placeholderText}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
      {type === "password" && (
        <TouchableOpacity
          onPress={() => setHidePassword(!secureTextEntry)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={LoginColors.primary}
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
