import { Animated } from 'react-native';

export default class RotateAnimation {
  constructor() {
    this.rotateValue;
    this.transformStyle;
  }
  getAnimatedInstance = () => {
    if (!this.rotateValue) {
      this.rotateValue = new Animated.Value(0);
    }
    return this.rotateValue;
  };
  getTransformStyle = rotateValue => {
    if (!this.transformStyle) {
      this.transformStyle = {
        transform: [
          {
            rotate: rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '180deg'] // degree of rotation
            })
          }
        ]
      };
    }
    return this.transformStyle;
  };
}
