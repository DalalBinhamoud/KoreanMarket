import React, { useEffect, useState } from 'react'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OTPInput from 'src/components/Inputs/OTPInput'
import { AuthStyles } from '../AuthStyles.style'
import { Pressable, Keyboard } from 'react-native'
import { Button } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { utilities } from 'src/constants/Utilities'
import * as Styled from 'src/styles/StyledComponent/TextStyles'
import { IScreenNavigation } from 'src/models/screen'
import { getValueFor } from "src/Store/SecureStore";

const OTP = (props: IScreenNavigation) => {
  const { t } = useTranslation()
  const [otpCode, setOTPCode] = useState('')
  const [isPinReady, setIsPinReady] = useState(false)
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    utilities.OTPConfig().resendOTPTimeLimit,
  )
  let resendOtpTimerInterval: any

  useEffect(() => {
    startResendOtpTimer()

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval)
      }
    }
  }, [resendButtonDisabledTime])

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval)
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval)
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1)
      }
    }, 1000)
  }

  const NavigateToHome = () => {
    props.navigation.navigate('Home')
}

  return (
    <SafeAreaView style={[AuthStyles.container]}>
      <Image
        style={AuthStyles.logo}
        source={require('assets/images/logo.png')}
      />
      <Styled.Title primary>{t('auth.OTPMsg')}</Styled.Title>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={AuthStyles.marginVertical}>
          <OTPInput
            code={otpCode}
            setCode={setOTPCode}
            setIsPinReady={setIsPinReady}
          />
        </View>

        {resendButtonDisabledTime > 0 ? (
          <Styled.Subtitle>{`${t('auth.prepareResendOTP', {
            time: resendButtonDisabledTime,
          })}`}</Styled.Subtitle>
        ) : (
          <Button uppercase={false}>
            <Styled.Subtitle primary>{t('auth.resendOTP')}</Styled.Subtitle>
          </Button>
        )}

        <Button
          testID="confirmOTP"
          mode="contained"
          disabled={!isPinReady}
          uppercase={false}
          style={AuthStyles.actionBtn}
          onPress={NavigateToHome}
        >
          {' '}
          {t('auth.sendOTP')}
        </Button>
      </Pressable>
    </SafeAreaView>
  )
}

export default OTP
