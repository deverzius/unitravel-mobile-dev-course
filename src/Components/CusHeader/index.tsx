import React, { FC, ReactNode } from 'react';
import { Text, TextStyle, StyleProp, StyleSheet } from 'react-native';
import { Heading } from 'native-base';
import { TextStroke } from '../TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';

interface CusHeaderProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const CusHeader: FC<CusHeaderProps> = ({ style, children }) => {
  return (
    <Heading fontSize="md" style={styles.heading}>
      <TextStroke stroke={2} color={Colors.INDIGO5}>
        <Text style={{
          fontSize: FontSize.MEDIUM,
          color: '#FFFFFF',
          fontFamily: 'montExtraBold'
        }}>
          {children}
        </Text>
      </TextStroke>
    </Heading>
  )
};

const styles = StyleSheet.create({
  heading: {
    paddingBottom: 60,
    paddingTop: 90,
    verticalAlign: 'middle',
  }
});

export default CusHeader;
