import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { Video } from "expo-av";

const { height, width } = Dimensions.get("window");

// 👇 Demo video list
const reels = [
  { id: "1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "2", url: "https://www.w3schools.com/html/movie.mp4" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Video
            source={{ uri: item.url }}
            style={styles.video}
            shouldPlay
            isLooping
            resizeMode="cover"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  video: {
    width: width,
    height: height
  }
});
