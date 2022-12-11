import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput, Text } from 'react-native-paper'
import { IScreenNavigation } from 'src/models/screen'
import { AuthStyles } from '../AuthStyles.style'

const Login = (props: IScreenNavigation) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const NavigateToRegister = () => props.navigation.navigate('Register')
  const NavigateToForgetPassword = () =>
    props.navigation.navigate('ForgetPassword')
  const NavigateToHome = () => props.navigation.navigate('Home')

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

            <Button uppercase={false} onPress={NavigateToForgetPassword}>
              {t('auth.forgetPassword')}
            </Button>

            <Button
              mode="contained"
              uppercase={false}
              style={AuthStyles.actionBtn}
              onPress={NavigateToHome}
            >
              {t('auth.login')}
            </Button>
            <Button uppercase={false} onPress={NavigateToRegister}>
              {t('auth.register')}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default Login
