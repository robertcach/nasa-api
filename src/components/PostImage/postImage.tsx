import { Text, View, StyleSheet } from "react-native";
import { TodayImage } from "../../types";
import { Button } from "react-native";

type PostImageProps = {
  postDay: TodayImage;
};
export default function PostImage({ postDay }: PostImageProps) {
  return (
    <View style={styles.container}>
      <Text>{postDay.title}</Text>
      <Text>{postDay.date}</Text>
      <View>
        <Button title="View" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18, 39, 113, 255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
});
