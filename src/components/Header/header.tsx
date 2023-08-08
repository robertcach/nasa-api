import { Text, View, Image, StyleSheet } from "react-native";

type Props = {};
export function Header({}: Props) {
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
