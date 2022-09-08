import React, { useContext, useState } from 'react';

import { ActivityIndicator, Colors } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer';
import { Text } from '../../../components/typography/text';
import { AuthenticationContext } from '../../../sevices/authentication/authentication.contex';
import {
  AccountCover,
  AuthButton,
  Background,
  ErrorContainer,
  LoginContainer,
  Title,
} from '../components/accountStyles';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <Background>
      <AccountCover />
      <Title>Meals To Go</Title>
      <Spacer size='large' position='top' />
      <LoginContainer>
        <TextInput
          style={{ width: 300 }}
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large' position='top' />
        <TextInput
          style={{ width: 300 }}
          label='Password'
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size='large' position='top' />
        {error && (
          <ErrorContainer>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </LoginContainer>
      <Spacer size='large' />
      <AuthButton mode='contained' onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </Background>
  );
};
