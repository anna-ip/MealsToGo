import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";

export const safeArea = () => {
  return <SafeArea></SafeArea>;
};

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
