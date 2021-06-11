import {useWindowDimensions} from 'react-native';

const useAppDimensions = (): {
  windowWidth: number;
  windowHeight: number;
  scale: number;
  fontScale: number;
} => {
  const {
    width: windowWidth,
    height: windowHeight,
    scale,
    fontScale,
  } = useWindowDimensions();

  return {windowWidth, windowHeight, scale, fontScale};
};

export {useAppDimensions};
