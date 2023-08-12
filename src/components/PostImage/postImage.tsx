import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TodayImage } from "../../types";

type PostImageProps = {
  postDay: TodayImage;
};
export default function PostImage({ postDay }: PostImageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postDay.title}</Text>
      <Text style={styles.date}>{postDay.date}</Text>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>View</Text>
        </TouchableOpacity>
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
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 12,
  },
  date: {
    color: "#fff",
    fontSize: 12,
  },
  button: {
    alignItems: "flex-end",
  },
});
