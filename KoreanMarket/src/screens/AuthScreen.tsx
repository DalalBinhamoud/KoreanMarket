import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { Button } from 'react-native-paper'

const AuthScreen = () => {
  const { t } = useTranslation()

  const onChangeHandler = () => {
    console.log('Pressed')
  }

  return (
    <ImageBackground style={styles.image}>
      <View>
        <TouchableOpacity onPress={onChangeHandler}>
          <Button icon="camera" mode="contained">
            {t('auth.login')}
          </Button>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
})

export default AuthScreen
