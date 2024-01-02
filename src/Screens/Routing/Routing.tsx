import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import MapView, { Marker, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';
import { PrimaryButton } from '@/Components/Button';
import { BasicInput } from '@/Components/Input';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';
import CusText from '@/Components/CusText';
import Toast from '@/Components/Toast';
import { useGetRouteMutation } from '@/Services';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export interface IRoutingProps {
  navigation: any;
}

// https://github.com/michalchudziak/react-native-geolocation
export const Routing = (props: IRoutingProps) => {
  const { navigation } = props;
  const [location, setLocation] = React.useState<any>(false);
  const [region, setRegion] = React.useState<any>(false);
  const [departure, setDeparture] = React.useState<any>("");
  const [destination, setDestination] = React.useState<any>("");
  const [showPath, setShowPath] = React.useState<any>(false);
  const [coords, setCoords] = React.useState<any>([]);

  const [
    getRoute,
    {
      data: routeData,
      isSuccess: routeSuccess,
      isLoading: routeLoading,
      error: routeError,
    }
  ] = useGetRouteMutation();



  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setShowPath(false);
      Toast.error(i18n.t(LocalizationKey.PERMISSION_DENIED));
      return false;
    }

    if (destination && departure) {
      await AsyncStorage.getItem('token')
        .then(token => getRoute({ token, startLocation: departure, endLocation: destination }))
    }
    else {
      setShowPath(false);
      setCoords([]);
      Toast.error(i18n.t(LocalizationKey.CANNOT_FOUND));
    }
    // Location.getCurrentPositionAsync({})
    //   .then((curLocation: any) => {
    //     console.log('Current Location: ', curLocation);
    //     setLocation(curLocation);
    //   })
  };

  const initialRegion = {
    latitude: 10.875006591125969,
    longitude: 106.80423725629018,
    latitudeDelta: 0.01,
    longitudeDelta: 0.018,
  };

  const onRegionChange = (region: any) => {
    setRegion(region);
  }

  const handleSetDeparture = (text: string) => {
    setDeparture(text);
  }

  const handleSetDestination = (text: string) => {
    setDestination(text);
  }

  // const coords = [
  //   [10.876708521432205, 106.80978187060946],
  //   [10.8765491629195, 106.80998035405479],
  //   [10.879268018836546, 106.81217934440156],
  //   [10.88041718615343, 106.81047609747682],
  //   [10.881337334700472, 106.81107577365157],
  //   [10.884461729068223, 106.80627419966689],
  //   [10.882110921257212, 106.80472565149853],
  //   [10.881751624034854, 106.80529003514361]
  // ]

  useEffect(() => {
    if (routeSuccess) {
      console.log('routeData: ', routeData);
      setShowPath(true);
      setCoords(routeData?.data[0]?.route);
    }
  }, [routeSuccess])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {isLoading && <Loader />} */}
      <>
        {routeLoading && <Loader />}
        <MapView style={styles.map}
          initialRegion={initialRegion}
          onRegionChange={onRegionChange}
        >
          {showPath && <Polyline
            coordinates={
              coords.map(item => {
                return {
                  latitude: item[0],
                  longitude: item[1]
                }
              })}
            strokeColor={Colors.INDIGO6}
            strokeWidth={5}
          />}
        </MapView>
        <View style={styles.control}>
          <CusText style={styles.heading}>Tìm Đường Đi</CusText>

          <BasicInput
            placeholder="Nhập điểm đi"
            onChangeText={handleSetDeparture}
            // editable={false}
            value={departure}
          />
          <BasicInput
            placeholder="Nhập điểm đến"
            onChangeText={handleSetDestination}
            value={destination}
          />
          <PrimaryButton title="Tìm đường" onPress={getLocation} style={{ width: 190 }} />
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
    justifyContent: 'flex-start',
  },
  heading: {
    fontFamily: 'montExtraBold',
    color: Colors.INDIGO5,
    fontSize: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  map: {
    width: "100%",
    height: "70%",
  },
  control: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    top: "60%",
    width: "102%",
    paddingHorizontal: "20%",
    height: "100%",
    borderRadius: 36,
  }
});
