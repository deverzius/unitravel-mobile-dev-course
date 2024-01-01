import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import { useLazyGetLocationsQuery, useLazyGetFavoriteLocationsQuery, useLazyGetRecentlyLocationsQuery, useLazyGetRecommendedLocationsQuery } from '@/Services';
import React, { useState, useEffect } from 'react';
import { Location } from '@/Services/interfaces';
import { Colors } from '@/Theme/Variables';
import { RootScreens } from '@/Screens';

export function SwiperComponent(props: any) {
  const { navigation } = props
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

      if(props.route.name == "Tất cả") {
        if(result1.data?.data != undefined) setViewData(result1.data?.data)
      } else if(props.route.name == "Nổi bật") {
        if(result2.data?.data != undefined) setViewData(result2.data?.data)
      } else if(props.route.name == "Gần đây") {
        if(result3.data?.data != undefined) setViewData(result3.data?.data)
      } else if(props.route.name == "Đề xuất") {
        if(result4.data?.data != undefined) setViewData(result4.data?.data)
      }
    }
    fetchData()
  }, [props.route.name])
  
  const page = viewData.map((item) => {        
    return (
      <TouchableHighlight underlayColor={Colors.INDIGO2} key={item.id} onPress={() => navigation.push(RootScreens.MAIN)}>
      <View style={styles.wrapper}>
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
      <TouchableHighlight underlayColor={Colors.INDIGO2} key={item.id} onPress={() => navigation.push(RootScreens.MAIN)}>
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
      <ScrollView>
      <View style={styles.wrapper}>
        <Swiper  loop={true} showsButtons={true} autoplay={true} dot={<View style={{}}/>} activeDot={<View style={{}}/>} >
          {page}
        </Swiper>
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
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    height: 220,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D2D2D2',
  },
  imageSwiper: {
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
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  scroll: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 400,
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
    borderRadius: 5,
    alignSelf: 'center'
  },
  scrollWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
    flexWrap: 'wrap',
  },
});