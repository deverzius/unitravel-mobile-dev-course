import { FlatList } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ListItem() {
  
}

export function ScrollLocation(props: any) {
  const {name, data} = props

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    order: 2,
  }
});