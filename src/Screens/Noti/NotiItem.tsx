import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box, Heading, Toast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { FontSize, Colors } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { INotiProps } from './Noti';
import { RootScreens, RootStacks } from '..';

export const formatDate = (date: string) => { 
	const d = new Date(date);
	return `TPHCM, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export const NotiItem = (props: INotiProps) => {
	const { navigation, data } = props;
	return (
		<TouchableHighlight
			onPress={() => {
				navigation.push(
					RootStacks.NOTI,
					{
						screen: RootScreens.SINGLENOTI,
						params: { ...data, navigation }
					}
				);
			}}
			style={styles.container_press}
			underlayColor={Colors.PRESS}
		>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: data?.image_url}} />
				<View style={styles.contentContainer}>
					<CusText style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{data.title}</CusText>
					<CusText style={styles.message} numberOfLines={3} ellipsizeMode='tail'>
						{data.content}
					</CusText>
					<CusText style={styles.time}>{formatDate(data.send_date)}</CusText>
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
		// backgroundColor: "red",
		borderRadius: 50,
		aspectRatio: 1 / 1
	},
	title: {
		fontFamily: 'montBold',
		fontSize: FontSize.SMALL,
		lineHeight: FontSize.REGULAR,
		// textAlign: 'justify',
		flexWrap: 'wrap'
	},
	message: {
		fontSize: FontSize.TINY,
		// textAlign: 'justify',
		paddingVertical: 8,
	},
	time: {
		fontSize: FontSize.TINY,
		fontFamily: 'montLight',
	}
});