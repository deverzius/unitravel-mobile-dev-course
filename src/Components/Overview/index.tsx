import { Colors } from '@/Theme/Variables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Overview = (props: any) => {
  return(
    <View style={{backgroundColor: 'white', paddingTop: 10}}>
      <Text style={styles.header}>Mô tả</Text>
      <Text style={styles.text}>{props.route.params.review}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backroundImage: {
    justifyContent: 'flex-end',
    width: 400,
    height: 450,
  },
  space: {
    height: 20,
    width: 400,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 30,
    height: 22,
  },
  content: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 22,
    color: 'black',
    fontWeight: '800',
    fontFamily: 'montRegular',
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  tinyicon1: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  tinyicon2: {
    width: 14,
    height: 14,
    marginLeft: 6,
    marginRight: 0,
  },
  text: {
    fontSize: 14,
    lineHeight: 15,
    color: Colors.INDIGO2,
    fontWeight: '600',
    fontFamily: 'montRegular',
    marginLeft: 6,
    marginRight: 6,
  },


  introText: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#D2D2D2',
    fontFamily: 'montRegular',
  },
  intro1: {
    fontSize: 28,
    color: Colors.INDIGO4,
    fontWeight: '800',
  },
  intro2: {
    fontSize: 20,
    lineHeight: 20,
    color: Colors.INDIGO3,
    fontWeight: '600',
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
});