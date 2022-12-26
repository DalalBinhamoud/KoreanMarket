import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { Login } from '../index'
import { loginForm } from './Validation/LoginForm'
import { Provider } from 'react-native-paper'

describe('Login screen', () => {
  // it('should navigate to OTP screen', async () => {
  //   const navigation = { navigate: () => {} }
  //   jest.spyOn(navigation, 'navigate')
  //   const screen = render(<Login navigation={navigation} />)

  //   const loginBtn = screen.getByTestId('login')
  //   const email = screen.getByTestId('email')
  //   const password = screen.getByTestId('password')

  //   fireEvent.changeText(email, 'test@example.com')
  //   fireEvent.changeText(password, 'password')

  //   fireEvent.press(loginBtn)

  //   await waitFor(() => expect(navigation.navigate).toBeCalledWith('OTP'))
  // })

  it('should navigate to Register screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')
    const screen = render(<Provider><Login navigation={navigation} /></Provider>)

    const registerBtn = screen.getByTestId('register')
    fireEvent.press(registerBtn)
    expect(navigation.navigate).toBeCalledWith('Register')
  })

  it('should navigate to Forget Password screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')
    const screen = render(<Provider><Login navigation={navigation} /></Provider>)

    const forgetPasswordBtn = screen.getByTestId('forgetPassword')
    fireEvent.press(forgetPasswordBtn)
    expect(navigation.navigate).toBeCalledWith('ForgetPassword')
  })

  it('should form be invalid when email is empty', () => {
    const formValues = { email: '' }

    expect(loginForm.isValidSync(formValues)).toBeFalsy()
  })

  it('should form be invalid when email is invalid', () => {
    const formValues = { email: 'invalid email' }

    expect(loginForm.isValidSync(formValues)).toBeFalsy()
  })

  it('should form be invalid when password is empty', () => {
    const formValues = { password: '', email: 'valid@example.com' }

    expect(loginForm.isValidSync(formValues)).toBeFalsy()
  })

  it('should form be valid', () => {
    const formValues = { password: 'password', email: 'valid@example.com' }

    expect(loginForm.isValidSync(formValues)).toBeTruthy()
  })

  it('should show error message if email is touched and is empty', async () => {
    const screen = render(<Provider><Login navigation={{}} /></Provider>)

    const email = screen.getByTestId('email')
    fireEvent.changeText(email, '')

    const loginBtn = screen.getByTestId('login')
    fireEvent.press(loginBtn)

    await waitFor(() => screen.getByTestId('email-error'))
  })

  it('should hide error message if email is not touched', async () => {
    const screen = render(<Provider><Login navigation={{}} /></Provider>)

    const emailText = screen.queryAllByTestId('email-error')

    await waitFor(() => expect(emailText?.length).toEqual(0))
  })

  it('should show error message if password is touched and is empty', async () => {
    const screen = render(<Provider><Login navigation={{}} /></Provider>)

    const password = screen.getByTestId('password')
    fireEvent.changeText(password, '')

    const loginBtn = screen.getByTestId('login')
    fireEvent.press(loginBtn)

    await waitFor(() => screen.getByTestId('password-error'))
  })

  it('should hide error message if password is not touched', async () => {
    const screen = render(<Provider><Login navigation={{}} /></Provider>)

    const passwordText = screen.queryAllByTestId('password-error')

    await waitFor(() => expect(passwordText?.length).toEqual(0))
  })
})
