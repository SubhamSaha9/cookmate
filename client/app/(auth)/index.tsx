import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "@/services/LoginStyle";
import Input from "@/components/ui/Input";
import { LoginColors } from "@/services/Colors";
import AnimateButton from "@/components/ui/AnimateButton";
import { Link, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/slice/authSlice";
import axios from "axios";
import { getItemAsync, setItemAsync } from "expo-secure-store";

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;
export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    const formdata = {
      email: email,
      password,
    };
    try {
      const { data } = await axios.post(`${BASE_URI}/auth/sign-in`, formdata);
      if (!data.success) {
        Alert.alert("Error", data.message);
        setLoading(false);
        return;
      }

      await setItemAsync("token", JSON.stringify(data.token));
      await setItemAsync("user", JSON.stringify(data.user));
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      router.replace("/(tabs)/Home" as any);
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
        <View style={styles.topIllustration}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <View style={styles.formContainer}>
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
              onPress={handleLogin}
              text="Login"
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Link href={"/(auth)/SignUp"} asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
