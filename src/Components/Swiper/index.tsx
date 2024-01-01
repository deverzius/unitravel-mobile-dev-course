import { RootScreens } from '@/Screens';
import { useLazyGetFavoriteLocationsQuery, useLazyGetLocationsQuery, useLazyGetRecentlyLocationsQuery, useLazyGetRecommendedLocationsQuery } from '@/Services';
import { Location } from '@/Services/interfaces';
import { Colors } from '@/Theme/Variables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Loader } from '../Loader';

export function SwiperComponent(props: any) {
  const { navigation } = props
  const [token, setToken] = useState<String>('');
  const [isLoading, setIsLoading] = useState(true);
  const [viewData, setViewData] = useState<Location[]>([]);
  const [getLocations, {isSuccess: getLocationIsLoading}] = useLazyGetLocationsQuery();
  const [getFavoriteLocations, {isSuccess: getFavoriteLocationsIsLoading}] = useLazyGetFavoriteLocationsQuery();
  const [getRecentlyLocations, {isSuccess: getRecentlyLocationsIsLoading}] = useLazyGetRecentlyLocationsQuery();
  const [getRecommendedLocations, {isSuccess: getRecommendedLocationsIsLoading}] = useLazyGetRecommendedLocationsQuery();

  useEffect(() => {
    const fetchData = async () => {
      
      Promise.resolve(AsyncStorage.getItem('token'))
      .then(result => {
        if (result) setToken(result)
        else setToken('null')
      })

      if(props.route.name == "Tất cả") {
        const result = await getLocations( { token } )
        if(result.data?.data != undefined) setViewData(result.data?.data)
        setIsLoading(!getLocationIsLoading)
      } else if(props.route.name == "Nổi bật") {
        const result = await getFavoriteLocations( { token } )
        if(result.data?.data != undefined) setViewData(result.data?.data)
        setIsLoading(!getFavoriteLocationsIsLoading)
      } else if(props.route.name == "Gần đây") {
        const result = await getRecentlyLocations( { token } )
        if(result.data?.data != undefined) setViewData(result.data?.data)
        setIsLoading(!getRecentlyLocationsIsLoading)
      } else if(props.route.name == "Đề xuất") {
        const result = await getRecommendedLocations( { token } )
        if(result.data?.data != undefined) setViewData(result.data?.data)
        setIsLoading(!getRecommendedLocationsIsLoading)
      }
    }
    fetchData()
  }, [getLocationIsLoading, getFavoriteLocationsIsLoading, getRecentlyLocationsIsLoading, getRecommendedLocationsIsLoading])
  
  const page = viewData.map((item) => {        
    return (
      <TouchableHighlight underlayColor={Colors.INDIGO2}
        key={item.id}
        onPress={() => navigation(RootScreens.MAIN, {id: item.id})}
      >
      <View style={styles.wrapper1}>
        <Image style={styles.imageSwiper} source={{uri: item.imageUrl}} />
        <Text style={styles.text1}>{item.name}</Text>
        <View style={styles.textWrap}>
          <Image style={styles.tinyicon1} source={require('@/../assets/icon/iconLocation.png')} />
          <Text style={styles.text2}>{item.address}</Text>
        </View>
        <View style={styles.textWrap}>
          <Image style={styles.tinyicon2} source={require('@/../assets/icon/iconStar.png')} />
          <Text style={styles.text2}>{item.rate}</Text>
        </View>
      </View>
    </TouchableHighlight>
    )
  })

  const list = viewData.map((item) => {        
    return (
      <TouchableHighlight underlayColor={Colors.INDIGO2}
        key={item.id}
        onPress={() => navigation(RootScreens.MAIN, {id: item.id})}
      >
        <View style={styles.scrollItem}>
          <Image style={styles.imageScroll} source={{uri: item.imageUrl}} />
          <View style={styles.scrollWrap}>
            <Text style={styles.text1}>{item.name}</Text>
            <View style={styles.textWrap}>
              <Image style={styles.tinyicon1} source={require('@/../assets/icon/iconLocation.png')} />
              <Text style={styles.text2}>{item.address}</Text>
            </View>
            <View style={styles.textWrap}>
              <Image style={styles.tinyicon2} source={require('@/../assets/icon/iconStar.png')} />
              <Text style={styles.text2}>{item.rate}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  })

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}
      <ScrollView>
      <View style={styles.wrapper}>
        <ScrollView horizontal={true}>
          {page}
        </ScrollView>
      </View>
      <View style={styles.scroll}>
        <Text style={styles.title}>{props.route.name}</Text>
        {list}
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 800,
    backgroundColor: 'white',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    height: 250,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D2D2D2',
  },
  wrapper1: {
    width: 220,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    height: 250,
    textAlign: 'center',
  },
  imageSwiper: {
    width: 180,
    height: 120,
    borderRadius: 8,
    alignSelf: 'center'
  },
  text2: {
    fontSize: 10,
    color: Colors.INDIGO6,
    fontWeight: '400',
  },
  tinyicon1: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  tinyicon2: {
    width: 12,
    height: 12,
    marginLeft: 3,
    marginRight: 3,
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  scroll: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 600,
  },
  scrollItem: {
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
  },
  imageScroll: {
    width: 120,
    height: 120,
    borderRadius: 8,
    alignSelf: 'center'
  },
  scrollWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'flex-start',
    margin: 10,
    flexWrap: 'wrap',
    width: 230,
  },
});