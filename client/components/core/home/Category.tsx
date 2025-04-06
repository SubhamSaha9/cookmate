import { View, Text, Alert, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer";
import Loading from "@/components/ui/Loading";

interface CategoryProps {
  name: string;
  image: string;
  _id: string;
  __v: number;
}

const BASE_URI = process.env.EXPO_PUBLIC_API_URL;

// const data = [
//   {
//     _id: "68178deef603ed99657a7f58",
//     name: "Breakfast",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374125/cookmate/rr3dmwxjhbtg6esqhmzz.png",
//     __v: 0,
//   },
//   {
//     _id: "68178fa5baa1aa002ecbc095",
//     name: "Lunch",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374564/cookmate/mvoabu58sd4x8g5thxjp.png",
//     __v: 0,
//   },
//   {
//     _id: "68178feebaa1aa002ecbc097",
//     name: "Dinner",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374630/cookmate/hs9ryhx3szsl9zwytndd.png",
//     __v: 0,
//   },
//   {
//     _id: "6817901ebaa1aa002ecbc099",
//     name: "Chinese",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374675/cookmate/nhryig10haagmyeaumel.png",
//     __v: 0,
//   },
//   {
//     _id: "6817906dbaa1aa002ecbc09b",
//     name: "Healthy",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374760/cookmate/fse4w4wn5c3tqhgserje.png",
//     __v: 0,
//   },
//   {
//     _id: "68179089baa1aa002ecbc09d",
//     name: "Fast Food",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374783/cookmate/rglqwh48f8d36c8xfluz.png",
//     __v: 0,
//   },
//   {
//     _id: "681790ccbaa1aa002ecbc09f",
//     name: "Dessert",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374859/cookmate/i7d6rdxnpoolhmnves7v.png",
//     __v: 0,
//   },
//   {
//     _id: "68179106baa1aa002ecbc0a1",
//     name: "Custart",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374917/cookmate/ean8ttxasejvywduqyds.png",
//     __v: 0,
//   },
//   {
//     _id: "68179134baa1aa002ecbc0a3",
//     name: "Drinks",
//     image:
//       "https://res.cloudinary.com/dvmweuskc/image/upload/v1746374963/cookmate/d5dhhdbzlalbuvnp0pkp.png",
//     __v: 0,
//   },
// ];
export default function Category() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [categories, setCategories] = useState<CategoryProps[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getcategories = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URI}/category/get-categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!data.success) {
        Alert.alert("Error", data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setCategories(data.data);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      Alert.alert("Error", error.response?.data.message ?? error.message);
    }
  };

  useEffect(() => {
    token && getcategories();
  }, []);
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.heading}>Category</Text>
      {loading ? (
        <Loading visible={loading} text="Fetching Categories..." />
      ) : (
        <FlatList
          data={categories}
          numColumns={4}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                {item.name}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 17,
  },
  categoryContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
  },
});
