import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { TodayImage } from "../../types";
import PostImage from "../PostImage/postImage";

type LastFiveDaysImagesProps = {
  lastFiveDaysImages: TodayImage[];
};
export default function LastFiveDaysImages({
  lastFiveDaysImages,
}: LastFiveDaysImagesProps) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {lastFiveDaysImages.map((post) => (
          <PostImage postDay={post} key={post.title} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 16,
  },
});
