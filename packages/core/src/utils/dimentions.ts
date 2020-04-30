import { Dimensions } from "react-native";

export function screenWidth(percentage: number) {
  const { width } = Dimensions.get("window");
  return width * (percentage / 100);
}

export function screenHeight(percentage: number) {
  const { height } = Dimensions.get("window");
  return height * (percentage / 100);
}
