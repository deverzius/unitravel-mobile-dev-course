import { Detail } from "./Detail";
import React, { useState, useEffect } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type DetailScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const DetailContainer = ( navigation: DetailScreenNavigatorProps) => {
  return <Detail navigation={navigation}/>;
};
