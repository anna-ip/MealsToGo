import React from "react";
import { Spacer } from "../../../components/spacer/spacer";
import {
  AccountCover,
  Background,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/accountStyles";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCover />
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
