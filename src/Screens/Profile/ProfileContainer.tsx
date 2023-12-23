import { Profile } from "./Profile";
import React, { useState, useEffect } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type ProfileScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const ProfileContainer = ({ navigation }: ProfileScreenNavigatorProps) => {
  return <Profile navigation={navigation} />;
};
