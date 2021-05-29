import React from "react";
import { categories } from "../../utils/categories";
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard: React.FC<Props> = ({ data }) => {
  const category = categories.filter(
    (category) => category.key === data.category
  )[0];

  return (
    <Container>
      <Title> {data.name} </Title>

      <Amount type={data.type}>
        {data.type === "negative" && "-"} {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />

          <CategoryName> {category.name} </CategoryName>
        </Category>
        <Date> {data.date} </Date>
      </Footer>
    </Container>
  );
};
