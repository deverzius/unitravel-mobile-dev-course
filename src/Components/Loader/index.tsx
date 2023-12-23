import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spinner, Heading } from 'native-base';
import { i18n, LocalizationKey } from '@/Localization';
import { Colors } from '@/Theme/Variables';

export const Loader = () => {
  return (
    <View style={{ ...styles.loader }}>
      <Spinner
        accessibilityLabel="Loading posts"
        color={Colors.WHITE}
        style={{ ...styles.spinner }}
      />
      <Heading color={Colors.WHITE} fontSize="md">
        {i18n.t(LocalizationKey.LOADING)}
      </Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
  spinner: {
    marginRight: 10,
  },
});
