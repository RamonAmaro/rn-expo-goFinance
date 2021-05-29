import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
};
