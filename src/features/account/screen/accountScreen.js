import React from "react";

import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer";
import {
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Background,
  Title,
} from "../components/accountStyles";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </Background>
  );
};
