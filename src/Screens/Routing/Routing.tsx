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

  const handleSetDeparture = (text: string) => {
    setDeparture(text);
  }

  const handleSetDestination = (text: string) => {
    setDestination(text);
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
          <Polyline
            coordinates={[
              {
                latitude: 10.8768353,
                longitude: 106.8093998
              },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={6}
          />
        </MapView>
        <View style={styles.control}>
          <CusText style={styles.heading}>Tìm Đường Đi</CusText>

          <BasicInput
            placeholder="Nhập điểm đi"
            onChangeText={handleSetDeparture}
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
    justifyContent: 'center',
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
    height: "100%",
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
