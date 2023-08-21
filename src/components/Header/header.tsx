import { Text, View, Image, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explorer</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require("../../../assets/nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "#ffffff",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 60,
    height: 60,
  },
});
