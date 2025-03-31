import { RootState } from "@/reducer";
import { checkAuth } from "@/slice/authSlice";
import { Redirect } from "expo-router";
import { getItemAsync } from "expo-secure-store";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  const checkAsyncAuth = async () => {
    const jsonToken = await getItemAsync("token");
    const jsonUser = await getItemAsync("user");

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
      {token ? (
        <Redirect href={"/(tabs)/Home" as any} />
      ) : (
        <Redirect href={"/Landing"} />
      )}
    </View>
  );
}
