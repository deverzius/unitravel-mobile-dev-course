import { Noti } from "./Noti";
import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type NotiScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const NotiContainer = ({ navigation }: NotiScreenNavigatorProps) => {
  return <Noti navigation={navigation} />;
};
