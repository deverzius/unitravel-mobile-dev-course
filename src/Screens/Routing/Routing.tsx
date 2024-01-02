import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, BackHandler } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Heading, ScrollView } from 'native-base';
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
import { SafeAreaView } from 'react-native-safe-area-context';

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
  const [isPress1, setIsPress1] = React.useState<any>(true);
  const [pressGetLocation, setPressGetLocation] = React.useState<any>(false);
  const [storedRouteData, setStoredRouteData] = React.useState<any>([]);

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
  BackHandler.addEventListener('hardwareBackPress', () => {
    setPressGetLocation(false);
    setShowPath(false);
    return true;
  });

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

  const onDetailPress = () => {
    setIsPress1(true);
  }

  const onRoutePress = () => {
    setIsPress1(false);

  }

  useEffect(() => {
    if (routeSuccess) {
      console.log('routeData: ', routeData);
      setShowPath(true);
      setPressGetLocation(true);
      setStoredRouteData(routeData?.data[0]);
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
              coords.map((item: any) => {
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
          {!pressGetLocation ?
            (
              <>
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
              </>
            ) :
            (
              <View>
                <View style={styles.headermenu}>
                  <TouchableOpacity
                    style={[
                      styles.menubtn
                    ]}
                    onPress={onDetailPress}
                  >
                    <Text
                      style={[styles.btntext, isPress1 ? styles.onPress : {}]}
                    >
                      {i18n.t(LocalizationKey.DETAIL)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.menubtn]}
                    onPress={onRoutePress}>
                    <Text
                      style={[styles.btntext, !isPress1 ? styles.onPress : {}]}
                    >
                      {i18n.t(LocalizationKey.ROUTINGMSG)}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.detailCont}>
                  {isPress1 ?
                    (
                      <SafeAreaView>
                        <ScrollView style={{ height: 200 }}>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Điểm đi: '}
                            </Text>
                            {departure}
                          </Text>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Điểm đến: '}
                            </Text>
                            {destination}
                          </Text>
                          <View style={{ paddingTop: 10 }}>
                            {storedRouteData?.direction?.map((item: any, index: number) => {
                              return (
                                <View key={index}>
                                  {
                                    index !== 0 &&
                                    <Text style={{
                                      fontFamily: 'montSemiBold',
                                      fontSize: 24,
                                      lineHeight: 20,
                                      color: Colors.INDIGO5,
                                    }}>{'   |'} </Text>
                                  }
                                  <Text style={styles.guildText}>
                                    <Text style={{
                                      fontFamily: 'montLight',
                                      color: Colors.INDIGO5,
                                    }}>{'o   '}</Text>
                                    {item}
                                  </Text>
                                </View>
                              )
                            })}
                          </View>
                        </ScrollView>
                      </SafeAreaView>
                    ) :
                    (
                      <SafeAreaView>
                        <ScrollView style={{ height: 200 }}>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Điểm đi: '}
                            </Text>
                            {departure}
                          </Text>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Điểm đến: '}
                            </Text>
                            {destination}
                          </Text>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Độ dài tuyến: '}
                            </Text>
                            {storedRouteData.distance + " km"}
                          </Text>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {`|  Thời gian đi bộ: `}
                            </Text>
                            {storedRouteData.walk_time + " phút"}
                          </Text>
                          <Text style={styles.textLine}>
                            <Text style={{
                              fontFamily: 'montSemiBold',
                              fontSize: FontSize[14],
                            }}>
                              {'|  Thời gian đi xe máy: '}
                            </Text>
                            {storedRouteData.drive_time + " phút"}
                          </Text>
                        </ScrollView>
                      </SafeAreaView>
                    )
                  }

                </View>
              </View>
            )

          }



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
    height: "80%",
  },
  control: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    top: "60%", //60
    width: "102%",
    paddingHorizontal: "20%",
    height: "100%",
    borderRadius: 36,
  },
  headermenu: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "160%",
    borderBottomColor: "rgba(111, 119, 137, 0.3)",
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  menubtn: {
    verticalAlign: 'middle',
    height: 60,
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    lineHeight: 60,
    fontFamily: 'montBold',
    color: "#6F7789",
  },
  onPress: {
    color: "#7B61FF",
    borderBottomColor: "#7B61FF",
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  detailCont: {
    paddingHorizontal: 30,
    // paddingVertical: 20,
  },
  textLine: {
    fontFamily: 'montRegular',
    paddingVertical: 6,
  },
  guildText: {
    fontFamily: 'montSemiBold',
    paddingLeft: 20,
    paddingVertical: 6,
    lineHeight: 20,
  }
});
