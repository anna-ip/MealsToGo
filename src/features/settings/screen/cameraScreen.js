import React, { useContext, useRef } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../../sevices/authentication/authentication.contex";

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);
  const CameraRef = useRef();

  const snap = async () => {
    if (CameraRef) {
      const photo = await CameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  //Todo add loader
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <CameraContainer>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </CameraContainer>
    );
  }

  return (
    <CameraContainer>
      <StyledCamera
        ref={(camera) => (CameraRef.current = camera)}
        type={"front"}
        ratio={"16:9"}
      >
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </StyledCamera>
    </CameraContainer>
  );
};

const CameraContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const StyledCamera = styled(Camera)`
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;
