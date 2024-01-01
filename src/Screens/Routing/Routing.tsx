import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import MapView, { Marker, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';


export interface IRoutingProps {
  navigation: any;
}

// https://github.com/michalchudziak/react-native-geolocation
export const Routing = (props: IRoutingProps) => {
  const { navigation } = props;
  const [location, setLocation] = React.useState<any>(false);
  const [region, setRegion] = React.useState<any>(false);

  // const [
  //   getNotis,
  //   {
  //     data: notisData,
  //     isSuccess: notisSuccess,
  //     isLoading: notisLoading,
  //     error: notisError,
  //   }
  // ] = useGetNotisMutation();
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return false;
    }
    Location.getCurrentPositionAsync({})
      .then((curLocation: any) => {
        console.log('Current Location: ', curLocation);
        setLocation(curLocation);
      })
  };

  const initialRegion = {
    latitude: 10.8768353,
    longitude: 106.8093998,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onRegionChange = (region: any) => { 
    setRegion(region);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {isLoading && <Loader />} */}
      <>
        <MapView style={styles.map}
          initialRegion={initialRegion}
          onRegionChange={onRegionChange}
        >
          {
            location &&
            <Marker coordinate={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude
            }}
            />
          }
        </MapView>
        <View style={styles.control}>
          <Text>Tìm Đường Đi</Text>
          <Button onPress={getLocation}>
            <Text>Điểm Đến</Text>
          </Button>
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {

  },
  map: {
    width: "100%",
    height: "100%",
  },
  control: {
    position: 'absolute',
    backgroundColor: "red",
    top: "64%",
    width: "104%",
    paddingHorizontal: "20%",
    height: "100%",
    borderRadius: 36,
  }
});
