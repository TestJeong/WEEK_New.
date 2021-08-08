import {useCallback} from 'react';
import {Animated} from 'react-native';

export const useNavigationHorizontalInterpolator = () => {
  const interpolator = useCallback(props => {
    const {current, inverted, layouts} = props;
    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
              inverted,
            ),
          },
        ],
      },
    };
  }, []);
  return interpolator;
};
