import { View, Text, Image, StyleSheet } from "react-native";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/services/Colors";

export default function Landing() {
  const imageList = [
    require("../assets/images/1.jpg"),
    require("../assets/images/c1.jpg"),
    require("../assets/images/2.jpg"),
    require("../assets/images/c2.jpg"),
    require("../assets/images/3.jpg"),
    require("../assets/images/c3.jpg"),
    require("../assets/images/4.jpg"),
    require("../assets/images/c1.jpg"),
    require("../assets/images/5.jpg"),
    require("../assets/images/1.jpg"),
    require("../assets/images/6.jpg"),
  ];
  const router = useRouter();
  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.3}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => (
              <Image source={image} key={i} alt="img" style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.25}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => (
              <Image source={image} key={i} alt="img" style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.35}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, i) => (
              <Image source={image} key={i} alt="img" style={styles.image} />
            ))}
          </View>
        </Marquee>
      </View>
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          height: "100%",
          padding: 20,
          marginTop: -23,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Cookmate AI 🥣🔎 | Find, Create & Enjoy Delicious recipes
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: COLORS.GRAY,
            marginTop: 7,
          }}
        >
          Generate delicious recipes in seconds with the power of AI! 🍔✨
        </Text>

        <Button
          text="Get Started"
          onPress={() => router.push("/(auth)" as any)}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
});
