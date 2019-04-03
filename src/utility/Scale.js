import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
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
// FONT RESPONSIVE
function RF(percent) {
  const { height } = Dimensions.get("window");
  const deviceHeight = isIphoneX()
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
      ? height - StatusBar.currentHeight
      : height;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, FS };

// NOTE:
// WIDTH USE : moderateScale(size)
// HEIGHT USE : verticalScale(size)
// padding or margin : scale(size)
// FONT : FS(size)
