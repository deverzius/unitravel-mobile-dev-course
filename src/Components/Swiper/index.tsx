import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useLazyGetLocationsQuery, useLazyGetFavoriteLocationsQuery, useLazyGetRecentlyLocationsQuery, useLazyGetRecommendedLocationsQuery } from '@/Services';
import React, { useState, useEffect } from 'react';
import { Location } from '@/Services/interfaces';
import { Colors } from '@/Theme/Variables';

export function SwiperComponent(props: any) {
  const [viewData, setViewData] = useState<Location[]>([]);
  const [getLocations, {}] = useLazyGetLocationsQuery();
  const [getFavoriteLocations, {}] = useLazyGetFavoriteLocationsQuery();
  const [getRecentlyLocations, {}] = useLazyGetRecentlyLocationsQuery();
  const [getRecommendedLocations, {}] = useLazyGetRecommendedLocationsQuery();

  useEffect(() => {
    const fetchData = async () => {
      const result1 = await getLocations()
      const result2 = await getFavoriteLocations()
      const result3 = await getRecentlyLocations()
      const result4 = await getRecommendedLocations()

      if(props.route.name == "All") {
        if(result1.data?.data != undefined) setViewData(result1.data?.data)
      } else if(props.route.name == "Highlight") {
        if(result2.data?.data != undefined) setViewData(result2.data?.data)
      } else if(props.route.name == "Recent") {
        if(result3.data?.data != undefined) setViewData(result3.data?.data)
      } else if(props.route.name == "Recommend") {
        if(result4.data?.data != undefined) setViewData(result4.data?.data)
      }
    }
    fetchData()
  }, [props.route.name])
  
  const page = viewData.map((items) => {        
    return (
    <View key={items.id} style={styles.wrapper}>
      <Image style={styles.image} source={{uri: items.imageUrl}} />
      <Text style={styles.text1}>{items.name}</Text>
      <View style={styles.textWrap}>
        <Image style={styles.tinyicon1} source={require('@/../assets/icon/iconLocation.png')} />
        <Text style={styles.text2}>{items.address}</Text>
      </View>
      <View style={styles.textWrap}>
        <Image style={styles.tinyicon2} source={require('@/../assets/icon/iconStar.png')} />
        <Text style={styles.text2}>{items.rate}</Text>
      </View>
    </View>)
  })

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop={true} showsButtons={true} autoplay={true} dot={<View style={{}}/>} activeDot={<View style={{}}/>} >
        {/* <View style={styles.slide1}>
          <Text style={styles.text}>{String(props.route.name)}</Text>
        </View>
        <View style={styles.slide1}>
          <Text>Welcome</Text>
        </View> */}
        {page}
      </Swiper>
      <View style={styles.scroll}>
        <Text>{props.route.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 30,
    paddingBottom: 20,
    height: 250,
    order: 1,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 5,
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
  scroll: {
    height: 350,
    order: 2,
  }
});