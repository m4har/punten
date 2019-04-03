import { Platform, StatusBar, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  );
}

export function FS(percent) {
  const deviceHeight = isIphoneX()
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
    ? height - StatusBar.currentHeight
    : height;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
