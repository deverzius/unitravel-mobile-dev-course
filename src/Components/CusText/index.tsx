import React, { FC, ReactNode } from 'react';
import { Text, TextStyle, StyleProp, StyleSheet } from 'react-native';

interface CusTextProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  numberOfLines?: number;
  ellipsizeMode?: any;
}

const CusText: FC<CusTextProps> = ({ style, children, numberOfLines, ellipsizeMode }) => {
  return <Text
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}
    style={[styles.defaultFont, style]}
  >
    {children}
  </Text>;
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'montRegular',
    fontSize: 10,
    lineHeight: 15,
  }
});

export default CusText;
