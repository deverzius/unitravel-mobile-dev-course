import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { FontSize, Colors } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { INotiProps } from './Noti';
import { RootStacks } from '..';


export const NotiItem = (props: INotiProps) => {
	const { navigation } = props;

	return (
		<TouchableHighlight
			onPress={() => {
				navigation.navigate(RootStacks.NOTI);
			}}
			style={styles.container_press}
			underlayColor={Colors.PRESS}
		>
			<View style={styles.container}>
				<View style={styles.image}>
				</View>
				<View style={styles.contentContainer}>
					<CusText style={styles.title}>Đại học Bách Khoa TP.HCM</CusText>
					<CusText style={styles.message}>
						Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
						Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
						Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
					</CusText>
					<CusText style={styles.time}>TP.HCM, 18:00:00 05/03/2023</CusText>
				</View>
			</View>
		</TouchableHighlight>

	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		width: "100%",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: "rgba(110, 97, 171, 0.1)"
	},
	container_press: {
	},

	contentContainer: {
		display: 'flex',
		flex: 1,
		paddingLeft: 12,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	image: {
		width: 80,
		backgroundColor: "red",
		borderRadius: 50,
		aspectRatio: 1 / 1
	},
	title: {
		fontFamily: 'montBold',
		fontSize: FontSize.SMALL,
		textAlign: 'justify',
		flexWrap: 'wrap'
	},
	message: {
		fontSize: FontSize.TINY,
		textAlign: 'justify',
		paddingVertical: 8,
	},
	time: {
		fontSize: FontSize.TINY,
		fontFamily: 'montLight',
	}
});