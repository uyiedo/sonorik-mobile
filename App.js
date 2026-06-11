import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import { Video } from "expo-av";

const { height, width } = Dimensions.get("window");

const reels = [
  { id: "1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: "2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Sonorik</Text>

      <FlatList
        data={reels}
        pagingEnabled
        renderItem={({ item }) => (
          <Video
            source={{ uri: item.url }}
            style={styles.video}
            shouldPlay
            isLooping
            useNativeControls
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
  title: {
    color: "white",
    textAlign: "center",
    marginTop: 40,
    fontSize: 20
  },
  video: {
    width: width,
    height: height - 60
  }
});
