import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../../components/Header";
import { useImage } from "../../hooks/useImage";
import { TodayImage } from "../../types";
import TodaysImage from "../../components/TodaysImage/todaysImage";
export function Home() {
  const [todayImage, setTodayImage] = useState<TodayImage | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const image: TodayImage = await useImage();
      setTodayImage(image);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {todayImage && <TodaysImage {...todayImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
