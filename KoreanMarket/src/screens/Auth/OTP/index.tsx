import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OTPInput from 'src/components/Inputs/OTPInput'
import { AuthStyles } from '../AuthStyles.style'
import { Pressable, Keyboard } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

const OTP = () => {
  const { t } = useTranslation()
  const [otpCode, setOTPCode] = useState('')
  const [isPinReady, setIsPinReady] = useState(false)

  return (
    <SafeAreaView style={[AuthStyles.container, AuthStyles.centeredVertically]}>
      <Text>{t('auth.OTPMsg')}</Text>
      <Pressable onPress={Keyboard.dismiss}>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          setIsPinReady={setIsPinReady}
        />
        <Button
          mode="contained"
          disabled={!isPinReady}
          uppercase={false}
          style={AuthStyles.actionBtn}
        >
          {' '}
          {t('auth.sendOTP')}
        </Button>
      </Pressable>
    </SafeAreaView>
  )
}

export default OTP
