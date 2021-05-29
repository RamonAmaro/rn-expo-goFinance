import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  justify-content: center;
  align-items: center;

  padding: 18px;

  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shake};
  font-size: ${RFValue(14)}px;
`;
