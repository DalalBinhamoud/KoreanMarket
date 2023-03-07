import { FormikErrors, FormikTouched } from "formik/dist/types";
import React from "react";
import { useTranslation } from "react-i18next";
import { KeyboardTypeOptions } from "react-native";
import { TextInput } from "react-native-paper";
import ErrorMessage from "src/components/Texts/ErrorMessage";

interface IProps {
  testId: string;
  value: string;
  label: string;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[];
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
  handleChange: (field: string) => (e: string | React.ChangeEvent<any>) => void;
}

const CustomTextInput = ({
  testId,
  value,
  label,
  maxLength,
  keyboardType,
  touched,
  error,
  setFieldTouched,
  handleChange,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <>
      <TextInput
        testID={testId}
        value={value}
        label={label}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onFocus={() => setFieldTouched("email")}
        onChangeText={handleChange(testId)}
      />
      <ErrorMessage
        testID="email-error"
        showErrorMessage={(touched && error) !== undefined}
        errorMessage={t(error)}
      />
    </>
  );
};

export default CustomTextInput;
