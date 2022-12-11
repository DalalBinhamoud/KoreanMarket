import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput, Text } from 'react-native-paper'
import { IScreenNavigation } from 'src/models/screen'
import { AuthStyles } from '../AuthStyles.style'

const Login = (props: IScreenNavigation) => {
  const { t } = useTranslation()
  const [email, setEmail] = React.useState('t')
  const [password, setPassword] = React.useState('t')

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
            <TextInput
              label={t('auth.email')}
              value={email}
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />

            <TextInput
              label={t('auth.password')}
              value={password}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
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
              onPress={NavigateToOTP}
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
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default Login
