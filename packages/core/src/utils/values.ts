import { Platform } from "react-native";

export const isWeb = Platform.OS === "web";
export const isAndroid = Platform.OS === "android";
export const isiOs = Platform.OS === "ios";
export const isNative = isiOs || isAndroid;

export const BASE_URL = __DEV__
  ? "http://192.168.0.30:8000/api"
  : // ?  'https://zedoctolib.herokuapp.com/api/'
    "https://zedoctolib.herokuapp.com/api/";
