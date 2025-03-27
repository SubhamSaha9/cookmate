import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "@/components/common/SafeScreen";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
