import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box, Container, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { formatDate, NotiItem } from './NotiItem';
import { TextStroke } from '@/Components/TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';
import { INotiProps } from './Noti';


export const SingleNotiContainer = (props: any) => {
  const data = props.route.params;

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* {isLoading && <Loader />} */}
      <CusHeader>
        Thông báo
      </CusHeader>
      <Container style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: data?.image_url }} />
        <Text style={styles.title}>
          {data?.location_name}
        </Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            <Text style={{ fontFamily: "montBold" }}>
              {"Tiêu đề: "}
            </Text>
            {data?.title}
          </Text>
          <Text style={styles.content}>
            <Text style={{ fontFamily: "montBold" }}>
              {"Ngày gửi: "}
            </Text>
            {formatDate(data?.send_date)}
          </Text>
          <Text style={styles.content}>
            <Text style={{ fontFamily: "montBold" }}>
              {"Nội dung: "}
            </Text>
            {data?.content}
          </Text>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: "100%",
    width: "106%",
    alignItems: "center",
  },

  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: "100%",
    borderColor: Colors.INDIGO5,
    borderRadius: 16,
    borderWidth: 2
  },

  contentContainer: {
    width: "100%",
  },


  image: {
    width: 110,
    backgroundColor: "transparent",
    borderRadius: 150,
    aspectRatio: 1 / 1,
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: FontSize.SMALL,
    fontFamily: "montBold",
  },
  content: {
    marginBottom: 26,
    fontSize: FontSize.TINY,
    fontFamily: "montRegular",
    textAlign: "justify",
  },
});
