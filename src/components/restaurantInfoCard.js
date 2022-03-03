import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Card, Title } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../assets/star";
import open from "../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Card elevation={5}>
        <CardImage source={{ uri: photos[0] }} />
        <Info>
          <CardTitle>{name}</CardTitle>
          <Section>
            <RatingRow>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </RatingRow>
            <SectionEnd>
              {isClosedTemporarily && (
                <IsClosedTemporarily>IS CLOSED TEMPORARILY</IsClosedTemporarily>
              )}
              {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            </SectionEnd>
          </Section>

          <Address>{address}</Address>
        </Info>
      </Card>
    </>
  );
};

const CardImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RatingRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;
const IsClosedTemporarily = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fonts.monospace};
  padding-right: ${(props) => props.theme.space[2]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
`;
