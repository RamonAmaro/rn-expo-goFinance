import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  font-size: ${RFValue(18)}px;

  background-color: ${({ theme }) => theme.colors.shake};
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text_dark};

  border-radius: 5px;

  margin-bottom: 8px;
`;
