import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "@/styles/SignupStyle";
import Input from "@/components/ui/Input";
import { useRouter } from "expo-router";
import AnimateButton from "@/components/ui/AnimateButton";
import axios from "axios";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;
export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async () => {
    setLoading(true);
    const formdata = {
      userName: username,
      email: email,
      password,
    };
    try {
      const { data } = await axios.post(`${BASE_URI}/auth/sign-up`, formdata);
      console.log(data);
      if (!data.success) {
        Alert.alert("Error", data.message);

        setLoading(false);
        return;
      }
      Alert.alert("Success!", data.message);
      router.back();
    } catch (error: any) {
      console.log(error?.response?.data.message ?? error.message);
      Alert.alert("Error", error?.response?.data.message ?? error.message);
    }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>CookMate🍳</Text>
            <Text style={styles.subtitle}>Share your favorite recipes</Text>
          </View>
          <View style={styles.formContainer}>
            {/* USERNAME */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <Input
                placeholder={"John Doe"}
                value={username}
                onChangeText={setUsername}
                icon={"person-outline"}
              />
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <Input
                placeholder={"Enter your email"}
                value={email}
                onChangeText={setEmail}
                icon={"mail-outline"}
                keyboardType={"email-address"}
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <Input
                placeholder={"Enter your password"}
                value={password}
                onChangeText={setPassword}
                icon={"lock-closed-outline"}
                secureTextEntry={hidePassword}
                type="password"
                setHidePassword={setHidePassword}
              />
            </View>

            {/* Button */}
            <AnimateButton
              loading={loading}
              onPress={handleSignup}
              text="Sign Up"
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
