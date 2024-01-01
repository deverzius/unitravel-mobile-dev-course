import { TouchableOpacity, StyleSheet, View, TextInput } from "react-native"
import React, { FC, ReactNode } from 'react';
import CusText from "../CusText"
import { Colors } from "@/Theme/Variables"
import { textStyle } from '@/Theme/Variables';


interface IInputProps {
	placeholder: string
	style?: any
	onChangeText?: any
	value: string
}

const BasicInput: FC<IInputProps> = (props: IInputProps) => {
	const { onChangeText, placeholder, style, value } = props;

	return (
		<TextInput
			onChangeText={onChangeText}
			style={[styles.input, style]}
			placeholder={placeholder}
			value={value}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		width: 260,
		height: 45,
		borderWidth: 1.2,
		borderColor: Colors.INDIGO5,
		borderRadius: 50,
		paddingLeft: 20,
		backgroundColor: Colors.WHITE,
		marginBottom: 20,

		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1,

		elevation: 4,
	}
});

export { BasicInput };