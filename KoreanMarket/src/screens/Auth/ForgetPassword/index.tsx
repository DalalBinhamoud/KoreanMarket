import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, Image, View } from 'react-native'
import { Card, TextInput, Button } from 'react-native-paper'
import { Header } from 'src/components/Layouts'
import { IScreenNavigation } from 'src/models/screen'
import { AuthStyles } from '../AuthStyles.style'

const ForgetPassword = (props: IScreenNavigation) => {
  const { t } = useTranslation()

  const sendNewPassword = () => {}
  return (
    <SafeAreaView style={AuthStyles.container}>
      <Header
        title={t('auth.forgetPassword')}
        hasBackBtn={true}
        navigation={props.navigation}
      />
      <Image
        style={AuthStyles.logo}
        source={require('assets/images/logo.png')}
      />
      <View style={AuthStyles.view}>
        <Card>
          <Card.Content>
            <TextInput label={t('auth.email')} keyboardType="email-address" />
            <Button
              mode="contained"
              style={AuthStyles.actionBtn}
              uppercase={false}
              onPress={sendNewPassword}
            >
              {t('auth.resetPassword')}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword
