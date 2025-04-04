import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import { useRouter } from "expo-router";
import styles from "@/styles/ProfileStyle";
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
  const onOptionClick = (option: any) => {
    if (option.name === "Logout") {
      router.replace(option.path);
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
