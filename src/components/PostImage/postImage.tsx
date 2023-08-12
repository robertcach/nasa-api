import { Text, View } from "react-native";
import { TodayImage } from "../../types";

type PostImageProps = {
  postDay: TodayImage;
};
export default function PostImage({ postDay }: PostImageProps) {
  return (
    <View>
      <Text>{postDay.date}</Text>
    </View>
  );
}
