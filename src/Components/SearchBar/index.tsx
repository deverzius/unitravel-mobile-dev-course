import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight  } from 'react-native';
import { RootScreens } from '@/Screens/index';

export const Header = (props: any) => {
  const { navigation } = props
  return (
    <View style={ styles.bgHeader }>
      <Image
        style={ styles.tinyLogo }
        source={require('@/../assets/logo/logo1.png')}
      />
      <Text style={ styles.space }></Text>
      <TouchableHighlight
        onPress={() => navigation.push(RootScreens.MAIN)}>
        <Image
          style={ styles.searchIcon }
          source={require('@/../assets/icon/magnifier.png')}
        />
      </TouchableHighlight>
      
    </View>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 35,
    marginLeft: 10,
    marginBottom: 20,
    marginRight: 20,
  },
  tinyLogo: {
    flex: 1,
    height: 30,
    width: 150,
    justifyContent: 'center',
  },
  space: {
    flex: 2,
  },
  searchIcon: {
    alignItems: 'flex-end',
    height: 24,
    width: 24,
    justifyContent: 'center',
  },
});
