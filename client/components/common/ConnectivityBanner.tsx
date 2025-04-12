import React, { useEffect, useState, useRef } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const ConnectivityBanner = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [wasOffline, setWasOffline] = useState(false); // Track if app was offline before
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connectionStatus = state.isConnected ?? false;

      if (!connectionStatus) {
        // Went offline: show banner and remember offline state
        setIsConnected(false);
        setWasOffline(true);
        setShowBanner(true);
        requestAnimationFrame(() => {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        });
      } else {
        // Went online:
        setIsConnected(true);
        if (wasOffline) {
          // Show "Back Online" only if we were offline before
          setShowBanner(true);
          requestAnimationFrame(() => {
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start();
          });

          // Hide banner after 3 seconds and reset offline flag
          setTimeout(() => {
            requestAnimationFrame(() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start(() => {
                setShowBanner(false);
                setWasOffline(false); // Reset offline flag
              });
            });
          }, 3000);
        }
        // If wasOffline is false, do nothing (don't show "Back Online")
      }
    });

    return () => {
      unsubscribe();
    };
  }, [fadeAnim, wasOffline]);

  if (!showBanner) return null;

  return (
    <Animated.View
      style={[
        styles.banner,
        {
          opacity: fadeAnim,
          backgroundColor: isConnected
            ? "rgba(0, 128, 0, 0.9)" // Green when online
            : "rgba(0, 0, 0, 0.8)", // Blackish transparent when offline
        },
      ]}
    >
      <Text style={styles.text}>
        {isConnected
          ? "Back Online"
          : "No Internet, please check your connection."}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: "absolute",
    bottom: "12%",
    width: "75%",
    justifyContent: "center",
    padding: 10,
    zIndex: 1000,
    borderRadius: 99,
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default ConnectivityBanner;
