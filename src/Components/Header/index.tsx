import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight  } from 'react-native';
import { RootScreens } from '@/Screens/index';

export const Header = (props: any) => {
  const { navigation } = props
  return (
    <View style={ styles.bgHeader }>
      <View style={ styles.tinyLogo }>
        <Image style={{ width: 130, height: 40 }} source={require('@/../assets/logo/logo1.png')}/>
      </View>
      <View style={ styles.space }></View>
      <TouchableHighlight style={ styles.searchIcon }
        onPress={() => navigation.push(RootScreens.MAIN)}>
        <Image source={require('@/../assets/icon/magnifier.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifycontent: 'flex-end',
    alignContent: 'center',
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  tinyLogo: {
    flexGrow: 1,
    height: 40,
    width: 140,
  },
  space: {
    flexGrow: 15,
  },
  searchIcon: {
    flexGrow: 1,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});