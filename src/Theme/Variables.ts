/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
import { TextStyle } from 'react-native';

export enum Colors {
  TRANSPARENT = "rgba(0,0,0,0)",
  INPUT_BACKGROUND = "#FFFFFF",
  WHITE = "#ffffff",
  BLACK = "#000000",
  TEXT = "#212529",
  PRIMARY = "#E14032",
  SUCCESS = "#28a745",
  ERROR = "#dc3545",
  INDIGO1 = "#AAB1E5",
  INDIGO2 = "#928FCE",
  INDIGO3 = "#6E61AB",
  INDIGO4 = "#4B3987",
  INDIGO5 = "#400081",
  INDIGO6 = "#6546FF",
  PRESS = "rgba(146, 143, 206, 0.1)",
}

export enum NavigationColors {
  PRIMARY = Colors.PRIMARY,
}

/**
 * FontSize
 */
export enum FontSize {
  TINY = 12,
  SMALL = 16,
  REGULAR = 20,
  MEDIUM = 28,
  LARGE = 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

const DEFAULT_FONT_COLOR = '#000000';
const DEFAULT_FONT_FAMILY = 'montRegular';
const DEFAULT_LINE_HEIGHT = 20;

export enum MetricsSizes {
  TINY = tiny,
  SMALL = small,
  REGULAR = regular,
  LARGE = large,
}

export const NOT_SHOW_NAVBAR_SCREEN = [
  'SPLASH',
  'LOGIN',
  'LOGOUT'
]

interface TextStyleProp extends TextStyle {}

export const textStyle = (
  size: number = small,
  color: string = DEFAULT_FONT_COLOR,
  family: string = DEFAULT_FONT_FAMILY,
  lineHeight: number = DEFAULT_LINE_HEIGHT
): TextStyleProp => {
  let temp: TextStyleProp = {
    fontSize: size,
    color: color,
    fontFamily: family,
    lineHeight: lineHeight
  };
  return temp;
};
