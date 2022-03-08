import React from "react";
import { SvgXml } from "react-native-svg";

import {
  StyledCard,
  CardImage,
  Info,
  Section,
  RatingRow,
  SectionEnd,
  Address,
} from "./restaurantInfoCard.styles";
import { Text } from "../../../components/typography/text";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <StyledCard elevation={5}>
        <CardImage source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <RatingRow>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </RatingRow>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">IS CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            </SectionEnd>
          </Section>

          <Address>{address}</Address>
        </Info>
      </StyledCard>
    </>
  );
};
