import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TodaysImage({
  url,
  title,
  date,
}: {
  url: string;
  title: string;
  date: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Button title="View" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 32,
    backgroundColor: "#2c449d",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});
