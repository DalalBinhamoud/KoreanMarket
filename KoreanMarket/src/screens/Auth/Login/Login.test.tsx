import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Login } from '../index'

describe('Login screen', () => {
  it('should navigate to OTP screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')
    const screen = render(<Login navigation={navigation} />)

    const loginBtn = screen.getByTestId('login')

    fireEvent.press(loginBtn)

    expect(navigation.navigate).toBeCalledWith('OTP')
  })

  it('should navigate to Register screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')
    const screen = render(<Login navigation={navigation} />)

    const registerBtn = screen.getByTestId('register')
    fireEvent.press(registerBtn)
    expect(navigation.navigate).toBeCalledWith('Register')
  })

  it('should navigate to Forget Password screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')
    const screen = render(<Login navigation={navigation} />)

    const forgetPasswordBtn = screen.getByTestId('forgetPassword')
    fireEvent.press(forgetPasswordBtn)
    expect(navigation.navigate).toBeCalledWith('ForgetPassword')
  })
})
