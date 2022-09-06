import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/safeArea';
import { Spacer } from '../../../components/spacer/spacer';
import { Text } from '../../../components/typography/text';
import { AuthenticationContext } from '../../../sevices/authentication/authentication.contex';
import { Section } from '../../restaurants/components/restaurantInfoCard.styles';

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Spacer position='top' size='large' />
      <AvatarContainer>
        <Avatar.Icon size={120} icon='human' backgroundColor='#2182BD' />
        <Spacer position='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => (
            <List.Icon {...props} color='black' icon='heart'></List.Icon>
          )}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title='Logout'
          left={(props) => (
            <List.Icon {...props} color='black' icon='logout'></List.Icon>
          )}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
