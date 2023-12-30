import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet } from 'react-native';

export function SwiperComponent() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to our application!</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to our application!</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to our application!</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to our application!</Text>
        </View>
      </Swiper>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});