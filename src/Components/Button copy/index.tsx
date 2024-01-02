import { TouchableOpacity, StyleSheet, View } from "react-native"
import React, { FC, ReactNode } from 'react';
import CusText from "../CusText"
import { Colors } from '@/Theme/Variables'
import { textStyle } from '@/Theme/Variables';


interface ButtonProps {
	title: string
	style: any
	onPress?: any
}

const PrimaryButton: FC<ButtonProps> = (props: ButtonProps) => {
	const { onPress, title, style } = props;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.btn, styles.lgBtn, style]}
		>
			<CusText style={styles.login}>{title}</CusText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
		width: 200,
		height: 45,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.WHITE,
		shadowColor: Colors.BLACK,
		borderColor: Colors.INDIGO2,
		borderWidth: 2,
		color: Colors.BLACK,
		paddingLeft: 70,
	},
	lgBtn: {
		backgroundColor: '#400081',
		borderWidth: 0,
		paddingLeft: 0,
	},
	login: {
		...textStyle(14, Colors.WHITE, 'montBold'),
	}
});

export { PrimaryButton };