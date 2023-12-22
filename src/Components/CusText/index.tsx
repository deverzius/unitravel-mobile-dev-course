import React, { FC, ReactNode } from 'react';
import { Text, TextStyle, StyleProp, StyleSheet } from 'react-native';

interface CusTextProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const CusText: FC<CusTextProps> = ({ style, children }) => {
  return <Text style={[styles.defaultFont, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'montRegular',
    fontSize: 10,
    lineHeight: 15,
  }
});

export default CusText;
