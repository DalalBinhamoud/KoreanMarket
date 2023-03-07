import { useTranslation } from 'react-i18next'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AuthStyles } from '../AuthStyles.style'
import { Header } from 'src/components/Layouts'
import { IScreenNavigation } from 'src/models/screen'
import { Formik } from 'formik'
import ErrorMessage from 'src/components/Texts/ErrorMessage'
import { registerForm } from './Validation/RegisterForm'
import { utilities } from 'src/constants/Utilities'
import AuthService from 'src/services/Auth'
import { useState } from 'react'
import PopUp from 'src/components/Modal/PopUp'
import { globalStyles } from 'src/styles/global.style'

const Register = (props: IScreenNavigation) => {
  const { t } = useTranslation()
  const { inputMaxLength } = utilities
  const {Register } = AuthService()
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const submitForm = (values) => {

     Register(values).then(()=>{
      props.navigation.navigate('OTP')
     },(error)=>{
      setModalVisible(true)
      setErrorMessage(error.response.data)
     })
  }

  return (
    <SafeAreaView>
      <Header
        title={t('auth.registration')}
        hasBackBtn={true}
        navigation={props.navigation}
      />
      <PopUp message={errorMessage} visible={modalVisible} setVisible={setModalVisible}/>
      <ScrollView>
        <View style={globalStyles.centeredView}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '',
            }}
            onSubmit={submitForm}
            validationSchema={registerForm}
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
                  testID="name"
                  label={t('auth.name')}
                  maxLength={inputMaxLength().name}
                  onFocus={() => setFieldTouched('name')}
                  onChangeText={handleChange('name')}
                />
                <ErrorMessage
                  testID="name-error"
                  showErrorMessage={(touched.name && errors.name) !== undefined}
                  errorMessage={t(errors.name)}
                />
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
                  right={
                    <TextInput.Icon
                      name="eye-off-outline"
                      color={AuthStyles.icon.color}
                    />
                  }
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
                <TextInput
                  testID="confirmPassword"
                  label={t('auth.confirmPassword')}
                  secureTextEntry={true}
                  right={
                    <TextInput.Icon
                      name="eye-off-outline"
                      color={AuthStyles.icon.color}
                    />
                  }
                  onFocus={() => setFieldTouched('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                />
                <ErrorMessage
                  testID="confirmPassword-error"
                  showErrorMessage={
                    (touched.confirmPassword && errors.confirmPassword) !==
                    undefined
                  }
                  errorMessage={t(errors.confirmPassword)}
                />
                <TextInput
                  testID="phone"
                  label={t('auth.phone')}
                  keyboardType="phone-pad"
                  onFocus={() => setFieldTouched('phone')}
                  onChangeText={handleChange('phone')}
                />

                <ErrorMessage
                  testID="phone-error"
                  showErrorMessage={
                    (touched.phone && errors.phone) !== undefined
                  }
                  errorMessage={t(errors.phone)}
                />

                <Button
                  testID="register"
                  mode="contained"
                  style={globalStyles.actionBtn}
                  onPress={handleSubmit}
                >
                  {t('auth.register')}
                </Button>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register
