import { Routing } from "./Routing";
import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type RoutingScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const RoutingContainer = ({ navigation }: RoutingScreenNavigatorProps) => {
  return <Routing navigation={navigation} />;
};
