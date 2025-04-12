import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducer";
import { useRouter } from "expo-router";
// import AsyncStorage from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "@/styles/ProfileStyle";
import { setToken, setUser } from "@/slice/authSlice";
const options = [
  {
    name: "Create New Recipe",
    icon: require("../../assets/images/i1.png"),
    path: "/(tabs)/Home",
  },
  {
    name: "My Recipes",
    icon: require("../../assets/images/i3.png"),
    path: "/(tabs)/CookBook",
  },
  {
    name: "Browse More Recipes",
    icon: require("../../assets/images/i2.png"),
    path: "/(tabs)/Explore",
  },
  {
    name: "Logout",
    icon: require("../../assets/images/power.png"),
    path: "/Landing",
  },
];
export default function Profile() {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const onOptionClick = async (option: any) => {
    if (option.name === "Logout") {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      dispatch(setToken(null));
      dispatch(setUser(null));
      router.replace(option.path);
      Alert.alert("You have been logged out successfully");
      return;
    }

    router.push(option.path);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.image }} alt="img" style={styles.image} />
        <Text style={styles.username}>{user?.userName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <FlatList
        data={options}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onOptionClick(item)}
            style={styles.listcontainer}
          >
            <Image source={item.icon} style={styles.listimage} />
            <Text style={styles.listtext}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
