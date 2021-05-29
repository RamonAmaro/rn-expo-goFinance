import React from "react";
import { Amount, Container, Title } from "./styles";

interface PropsHistoryCard {
  title: string;
  amount: string;
  color: string;
}
export const HistoryCard: React.FC<PropsHistoryCard> = ({
  title,
  amount,
  color,
}) => {
  return (
    <Container color={color}>
      <Title> {title} </Title>
      <Amount> {amount} </Amount>
    </Container>
  );
};
