import { useTranslation } from 'react-i18next'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AuthStyles } from '../AuthStyles.style'
import { Header } from 'src/components/Layouts'
import { IScreenNavigation } from 'src/models/screen'

const Register = (props: IScreenNavigation) => {
  const { t } = useTranslation()

  const navigateToOTP = () => props.navigation.navigate('OTP')

  return (
    <SafeAreaView>
      <Header
        title={t('auth.registration')}
        hasBackBtn={true}
        navigation={props.navigation}
      />
      <ScrollView>
        <View style={AuthStyles.centeredView}>
          <TextInput label={t('auth.name')} />
          <TextInput label={t('auth.email')} keyboardType="email-address" />
          <TextInput
            label={t('auth.password')}
            secureTextEntry={true}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={AuthStyles.icon.color}
              />
            }
          />
          <TextInput
            label={t('auth.confirmPassword')}
            secureTextEntry={true}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={AuthStyles.icon.color}
              />
            }
          />
          <TextInput label={t('auth.phone')} keyboardType="phone-pad" />
          <Button
            testID="register"
            mode="contained"
            style={AuthStyles.actionBtn}
            onPress={navigateToOTP}
          >
            {t('auth.register')}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register
