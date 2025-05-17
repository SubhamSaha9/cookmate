import { checkAuth } from "@/slice/authSlice";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const dispatch = useDispatch();

  const checkAsyncAuth = async () => {
    const jsonToken = await AsyncStorage.getItem("token");
    const jsonUser = await AsyncStorage.getItem("user");

    if (jsonToken && jsonUser) {
      dispatch(
        checkAuth({ token: JSON.parse(jsonToken), user: JSON.parse(jsonUser) })
      );
    }
  };
  useEffect(() => {
    checkAsyncAuth();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={"/Landing"} />
    </View>
  );
}
