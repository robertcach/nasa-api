import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../../components/Header";
import { useImage } from "../../hooks/useImage";
import { TodayImage } from "../../types";
import TodaysImage from "../../components/TodaysImage/todaysImage";
import { format, subDays } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/lastFiveDaysImages";
export function Home() {
  const [todayImage, setTodayImage] = useState<TodayImage | undefined>(
    undefined
  );
  const [lastFiveDaysImages, setLastDaysImages] = useState<TodayImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const image: TodayImage = await useImage();
      setTodayImage(image);
    };

    const loadLast5DaysImages = async () => {
      const todayDate = format(new Date(), "yyyy-MM-dd");
      const fiveDaysAgo = format(subDays(new Date(), 5), "yyyy-MM-dd");

      const fetchLastFiveDaysImages: TodayImage[] = await useImage(
        `&start_date=${fiveDaysAgo}&end_date=${todayDate}`
      );

      setLastDaysImages(fetchLastFiveDaysImages);
    };

    fetchData();
    loadLast5DaysImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {todayImage && <TodaysImage {...todayImage} />}
      <LastFiveDaysImages lastFiveDaysImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7, 26, 93, 155)",
  },
});
