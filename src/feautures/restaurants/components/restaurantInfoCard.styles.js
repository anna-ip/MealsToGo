import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const StyledCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const CardImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const RatingRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
`;
