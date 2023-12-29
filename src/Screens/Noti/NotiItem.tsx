import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { FontSize } from '@/Theme/Variables';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const NotiItem = () => {

	return (
		<View style={styles.container}>
			<View style={styles.image}>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>Đại học Bách Khoa TP.HCM</Text>
				<Text style={styles.message}>
					Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
					Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
					Đại học Bách Khoa TP.HCM vừa cập nhật mô tả của họ
				</Text>
				<Text style={styles.time}>TP.HCM, 18:00:00 05/03/2023</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		fontFamily: 'montRegular',
		paddingVertical: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		width: "100%",

		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: "rgba(110, 97, 171, 0.1)"
		,
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
		fontSize: FontSize.SMALL,
		textAlign: 'justify',
		fontWeight: "bold",
		flexWrap: 'wrap'
	},
	message: {
		fontSize: FontSize.TINY,
		textAlign: 'justify',
		paddingVertical: 8,
	},
	time: {
		fontSize: FontSize.TINY,
		fontStyle: "italic",
		fontWeight: "300",
	}
});