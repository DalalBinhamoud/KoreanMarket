import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput, Text } from 'react-native-paper'
import { IScreenNavigation } from 'src/models/screen'
import { AuthStyles } from '../AuthStyles.style'
import { Formik } from 'formik'
import ErrorMessage from 'src/components/Texts/ErrorMessage'
import { loginForm } from './Validation/LoginForm'
import { utilities } from 'src/constants/Utilities'

const Login = (props: IScreenNavigation) => {
  const { t } = useTranslation()
  const { inputMaxLength } = utilities

  const NavigateToRegister = () => props.navigation.navigate('Register')
  const NavigateToForgetPassword = () =>
    props.navigation.navigate('ForgetPassword')
  const NavigateToOTP = () => props.navigation.navigate('OTP')

  return (
    <SafeAreaView style={AuthStyles.container}>
      <Image
        style={AuthStyles.logo}
        source={require('assets/images/logo.png')}
      />
      <View style={AuthStyles.view}>
        <Card>
          <Card.Title title={t('auth.login')} />
          <Card.Content>
            <Text>{t('auth.email')}</Text>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={NavigateToOTP}
              validationSchema={loginForm}
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
                    label={t('auth.email')}
                    maxLength={inputMaxLength().email}
                    keyboardType="email-address"
                    onFocus={() => setFieldTouched('email')}
                    onChangeText={handleChange('email')}
                  />
                  <ErrorMessage
                    testID="email-error"
                    showErrorMessage={
                      (touched.email && errors.email) !== undefined
                    }
                    errorMessage={t(errors.email)}
                  />

                  <TextInput
                    testID="password"
                    label={t('auth.password')}
                    maxLength={inputMaxLength().password}
                    secureTextEntry={true}
                    onFocus={() => setFieldTouched('password')}
                    onChangeText={handleChange('password')}
                  />

                  <ErrorMessage
                    testID="password-error"
                    showErrorMessage={
                      (touched.password && errors.password) !== undefined
                    }
                    errorMessage={t(errors.password)}
                  />

                  <Button
                    uppercase={false}
                    onPress={NavigateToForgetPassword}
                    testID="forgetPassword"
                  >
                    {t('auth.forgetPassword')}
                  </Button>

                  <Button
                    mode="contained"
                    uppercase={false}
                    style={AuthStyles.actionBtn}
                    onPress={handleSubmit}
                    testID="login"
                  >
                    {t('auth.login')}
                  </Button>
                  <Button
                    uppercase={false}
                    onPress={NavigateToRegister}
                    testID="register"
                  >
                    {t('auth.register')}
                  </Button>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default Login
