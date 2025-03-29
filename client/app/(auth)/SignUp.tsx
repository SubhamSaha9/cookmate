import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "@/services/SignupStyle";
import Input from "@/components/ui/Input";
import { Link } from "expo-router";
import AnimateButton from "@/components/ui/AnimateButton";

export default function SignUp() {
  const [Username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async () => {};
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
                value={Username}
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
              <Link href={"/(auth)"} asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
