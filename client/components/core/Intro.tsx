import { View, Text, Image, Switch } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";

export default function Intro() {
  const { user } = useSelector((state: RootState) => state.auth);
  //   console.log(user);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={{ uri: user?.image }}
          alt="profile"
          style={{ width: 40, height: 40, borderRadius: 99 }}
        />
        <Text style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
          Hello, {user?.userName.split(" ")[0]}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>
          {isEnabled ? "Veg" : "Non-Veg"}
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  );
}
