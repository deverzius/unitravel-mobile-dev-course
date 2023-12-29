import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box, Container, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { NotiItem } from './NotiItem';
import { TextStroke } from '@/Components/TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';


export const SingleNotiContainer = () => {
  // const { navigation } = props;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {isLoading && <Loader />} */}
      <>
        <CusHeader>
          Thông báo
        </CusHeader>
        <Container style={styles.mainContainer}>
          <Box style={styles.image}></Box>
          <Text style={styles.title}>
            Đại học Bách Khoa TP.HCM
          </Text>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              <Text style={{ fontFamily: "montBold" }}>
                {"Tiêu đề: "}
              </Text>
              Cảm ơn bạn đã cho nhận xét về Đại học KH XH&NV
            </Text>
            <Text style={styles.content}>
              <Text style={{ fontFamily: "montBold" }}>
                {"Ngày gửi: "}
              </Text>
              18:00:00 05/03/2023
            </Text>
            <Text style={styles.content}>
              <Text style={{ fontFamily: "montBold" }}>
                {"Nội dung: "}
              </Text>
              Đại học KH XH&NV cảm ơn bạn đã để lại nhận xét cùng đánh giá 5 sao cho trường. Trường sẽ tiếp tục cố gắng để nâng cao chất lượng trong tương lai.
            </Text>
          </View>
        </Container>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },

  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: Colors.INDIGO5,
    borderRadius: 16,
    borderWidth: 2
  },

  contentContainer: {
    width: "100%",
  },


  image: {
    width: 150,
    backgroundColor: "red",
    borderRadius: 150,
    aspectRatio: 1 / 1,
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    marginBottom: 38,
    fontSize: FontSize.SMALL,
    fontFamily: "montBold",
  },
  content: {
    marginBottom: 30,
    fontSize: FontSize.TINY,
    fontFamily: "montRegular",
    textAlign: "justify",
  },
});
