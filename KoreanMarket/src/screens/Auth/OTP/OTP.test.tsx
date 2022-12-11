import React from 'react'
import { render } from '@testing-library/react-native'
import OTP from '.'

describe('OTP Screen', () => {
  it('Should Confirm OTP btn be disabled initially ', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')

    const screen = render(<OTP navigation={navigation} />)

    const confirmBtn = screen.getByTestId('confirmOTP')
    expect(confirmBtn.props?.accessibilityState?.disabled).toEqual(true)
  })
})
