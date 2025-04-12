import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import SafeScreen from "@/components/common/SafeScreen";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/reducer/index";
import { Ionicons } from "@expo/vector-icons";
import ConnectivityBanner from "@/components/common/ConnectivityBanner";

const store = configureStore({
  reducer: rootReducer,
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Provider store={store}>
          <ConnectivityBanner />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="recipe-by-category/index"
              options={{
                headerTransparent: true,
                headerShown: true,
                headerTitle: "",
              }}
            />
            <Stack.Screen
              name="recipe-detail/index"
              options={{
                headerShown: true,
                headerTitle: "Detail",
                headerRight: () => {
                  return <Ionicons name="share" size={24} color={"black"} />;
                },
              }}
            />
          </Stack>
        </Provider>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
