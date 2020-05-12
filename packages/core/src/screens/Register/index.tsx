import React from "react";
import { View, Text } from "react-native";
import { RegisterController } from "../../controllers/RegisterController";

export const Register: React.FC = () => {
  return (
    <RegisterController>
      {(data) => {
        return (
          <View>
            <Text
              onPress={() => {
                data.submit({ email: "hahaha", password: "hahaha" });
              }}
            >
              submit
            </Text>
          </View>
        );
      }}
    </RegisterController>
  );
};
