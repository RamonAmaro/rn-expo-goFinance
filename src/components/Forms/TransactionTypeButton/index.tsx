import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Icon, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  isActive: boolean;
  type: "up" | "down";
}

const iconType = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export const TransactionTypeButton: React.FC<Props> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={iconType[type]} type={type} />
      <Title isActive={isActive}> {title} </Title>
    </Container>
  );
};
