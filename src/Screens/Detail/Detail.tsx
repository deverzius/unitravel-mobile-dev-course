import { Overview } from '@/Components/Overview';
import { useGetLocationMutation } from '@/Services';
import { Colors } from '@/Theme/Variables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface IDetailProps {
  navigation: any;
}

export const Detail = (props: IDetailProps) => {
  const Tab = createMaterialTopTabNavigator();
  const id = props.navigation.route.params.id
  const navigation = props.navigation.navigation
  const [token, setToken] = useState('null')
  const [data, setData] = useState({
    name: 'name',
    coordinates: [],
    created_at: '',
    address: '',
    overview: '',
    rate: 5,
    id: '',
    imageUrl: 'https://gobuigdawhvalyvyxhxf.supabase.co/storage/v1/object/public/UTBucket/locations/hcmut.jpeg',
  })
  const [getLocation, {isLoading: isSuccess}] = useGetLocationMutation()

  useEffect(() => {
    const fetchData = async () => {
      Promise.resolve(AsyncStorage.getItem('token'))
      .then(result => {
        if (result) setToken(result)
        else setToken('null')
      })
      const result = await getLocation( {userData: id, token: token} )
      if('data' in result) setData(result.data)
    }
    fetchData()
  }, [])

  const star = [...new Array(data.rate+1)].map((value, index) => {
    return <Image key={index} style={styles.tinyicon2} source={require('@/../assets/icon/iconStar.png')} />
  })
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground resizeMode="cover" style={styles.backroundImage} source={{uri: data.imageUrl}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Image
          source={require('@/../assets/icon/arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
        <View style={styles.space}></View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.header}>{data.name}</Text>
        <View style={styles.textWrap}>
          <Image style={styles.tinyicon1} source={require('@/../assets/icon/iconLocation.png')} />
          <Text style={styles.text}>{data.address}</Text>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.text}>{data.rate}</Text>
          {star}
        </View>
        <Tab.Navigator
          initialRouteName="Review"
          screenOptions={{
            swipeEnabled: false,
            tabBarPressColor: Colors.INDIGO3,
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: Colors.INDIGO6,
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarStyle: { backgroundColor: 'white' },
          }}
        >
          <Tab.Screen
            name="Tổng quan"
            initialParams={{ review: data.overview }}
            component={Overview}
            options={{ tabBarLabel: 'Tổng quan' }}
          />
          <Tab.Screen
            name="Nhận xét"
            component={Overview}
            initialParams={{ review: data.overview }}
            options={{ tabBarLabel: 'Nhận xét' }}
          />
          <Tab.Screen
            name="Hình ảnh"
            component={Overview}
            initialParams={{ review: data.overview }}
            options={{ tabBarLabel: 'Hình ảnh' }}
          />
        </Tab.Navigator>
      </View>
      
    </View>
  );
};

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
