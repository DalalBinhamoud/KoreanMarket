import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { IncrementDecrementStyle } from "./IncrementDecrementStyle";

interface IProps {
  testId: string;
  label: string;
  value: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const IncrementDecrementInput = ({
  testId,
  label,
  value,
  setFieldValue,
}: IProps) => {
  const incrementValue = (value) => {
    const newValue = Number(value) + 1;
    setFieldValue(testId, newValue.toString());
  };
  const decrementValue = (value) => {
    const newValue = Number(value) - 1;
    setFieldValue(testId, newValue.toString());
  };

  return (
    <>
      <Text style={IncrementDecrementStyle.label}>{label}</Text>
      <View style={IncrementDecrementStyle.container}>
        <Button
          disabled={value === "0"}
          mode="contained"
          onPress={() => decrementValue(value)}
        >
          {"-"}
        </Button>
        <TextInput
          testID={testId}
          style={IncrementDecrementStyle.input}
          disabled={true}
          value={value.toString()}
        />
        <Button mode="contained" onPress={() => incrementValue(value)}>
          {"+"}
        </Button>
      </View>
    </>
  );
};

export default IncrementDecrementInput;
