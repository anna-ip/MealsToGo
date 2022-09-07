import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";
import { SafeArea } from "../../../components/utility/safeArea";
import { AuthenticationContext } from "../../../sevices/authentication/authentication.contex";

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [userPhoto, setUserPhoto] = useState(null);

  const getUserPhoto = async (currentUser) => {
    try {
      const photoURI = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      if (photoURI !== null) {
        setUserPhoto(photoURI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(() => {
    getUserPhoto(user);
  }, [user]);

  console.log("photoURI:", userPhoto);

  return (
    <SafeArea>
      <Spacer position="top" size="large" />
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!userPhoto ? (
            <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={120} source={{ uri: `${userPhoto}` }} />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
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
