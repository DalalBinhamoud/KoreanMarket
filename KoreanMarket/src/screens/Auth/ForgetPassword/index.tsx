import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView, Image, View } from "react-native";
import { Card, TextInput, Button, Snackbar } from "react-native-paper";
import { Header } from "src/components/Layouts";
import ErrorMessage from "src/components/Texts/ErrorMessage";
import { IScreenNavigation } from "src/models/screen";
import { AuthStyles } from "../AuthStyles.style";
import { ForgetPasswordForm } from "./Validation/ForgetPasswordForm";
import AuthService from "src/services/Auth";

const ForgetPassword = (props: IScreenNavigation) => {
  const { t } = useTranslation();
  const {ForgetPassword} = AuthService()
  const [visible, setVisible] = useState(false);
  const [resetPasswordSendMsg,setResetPasswordSendMsg] = useState('')

  const sendResetPasswordLink = (value) => {
    ForgetPassword(value.email).then((res)=> {
      setVisible(true)
      setResetPasswordSendMsg(res.data)
      props.navigation.navigate('Login')
    },(error)=>{
      setVisible(true)
      setResetPasswordSendMsg(t("auth.emailNotFound"))
    })
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <SafeAreaView style={AuthStyles.container}>
      <Header
        title={t("auth.forgetPassword")}
        hasBackBtn={true}
        navigation={props.navigation}
      />
      <Image
        style={AuthStyles.logo}
        source={require("assets/images/logo.png")}
      />
        <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}>
            {resetPasswordSendMsg}
        </Snackbar>
      <View style={AuthStyles.view}>
        <Card>
          <Card.Content>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgetPasswordForm}
              onSubmit={sendResetPasswordLink}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldTouched,
                touched,
                errors,
              }) => (
                <>
                  <TextInput
                    testID="email"
                    label={t("auth.email")}
                    keyboardType="email-address"
                    onFocus={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                  />
                  <ErrorMessage
                    testID="email-error"
                    showErrorMessage={
                      (touched.email && errors.email) !== undefined
                    }
                    errorMessage={t(errors.email)}
                  />
                  <Button
                    testID="reset-password"
                    mode="contained"
                    style={AuthStyles.actionBtn}
                    uppercase={false}
                    onPress={handleSubmit}
                  >
                    {t("auth.resetPassword")}
                  </Button>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
