import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Modal } from "react-native";
import uuid from "react-native-uuid";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { useAuth } from "../../context/AuthContenxt";
import { SelectCategory } from "../../screens/SelectCategory";
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionTypes,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

export const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const { navigate } = useNavigation();

  const { user } = useAuth();

  const dataKey = `@gofinance:transactions_user:${user.id}`;

  const { control, handleSubmit, reset } = useForm();

  function handleTransactionTypeSelect(type: "positive" | "negative") {
    setTransactionType(type);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  async function handleRegister(form: FormData) {
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);

      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType("");
      setCategory({ name: "Categoria", key: "category" });

      navigate("Listagem");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel Salvar, tente novamente !");
    }
  }

  return (
    <Container>
      <Header>
        <Title> Cadastro </Title>
      </Header>
      <Form>
        <Fields>
          <InputForm placeholder="Nome" control={control} name="name" />
          <InputForm placeholder="Preço" control={control} name="amount" />
          <TransactionTypes>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              isActive={transactionType === "positive"}
              onPress={() => handleTransactionTypeSelect("positive")}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              isActive={transactionType === "negative"}
              onPress={() => handleTransactionTypeSelect("negative")}
            />
          </TransactionTypes>

          <CategorySelect
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <SelectCategory
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
};
