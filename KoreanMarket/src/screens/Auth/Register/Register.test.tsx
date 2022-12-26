import React from 'react'
import {
  fireEvent,
  render,
  waitFor,
  screen,
  cleanup,
} from '@testing-library/react-native'
import Register from '.'
import { registerForm } from './Validation/RegisterForm'
import { Provider } from 'react-native-paper'

describe('Register Screen', () => {
  const navigation = { navigate: () => {} }
  jest.spyOn(navigation, 'navigate')

  beforeEach(() => {
    render(<Provider><Register navigation={navigation} /></Provider>)
  })

  afterAll(() => {
    cleanup()
  })

  // it('Should navigate to OTP screen', async () => {
  //   const name = screen.getByTestId('name')
  //   const email = screen.getByTestId('email')
  //   const password = screen.getByTestId('password')
  //   const confirmPassword = screen.getByTestId('confirmPassword')
  //   const phone = screen.getByTestId('phone')
  //   const registerBtn = screen.getByTestId('register')

  //   fireEvent.changeText(name, 'test')
  //   fireEvent.changeText(email, 'test@example.com')
  //   fireEvent.changeText(password, 'pas1swordP#')
  //   fireEvent.changeText(confirmPassword, 'pas1swordP#')
  //   fireEvent.changeText(phone, '0500000000')
  //   fireEvent.press(registerBtn)

  //   await waitFor(() => expect(navigation.navigate).toBeCalledWith('OTP'))
  // })

  // name field //
  it('Should form be invalid  if name field is empty', () => {
    const formValues = { name: '' }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })

  it('Should show error message if name field touched and empty', async () => {
    const name = screen.getByTestId('name')
    const registerBtn = screen.getByTestId('register')

    fireEvent.changeText(name, '')
    fireEvent.press(registerBtn)

    await waitFor(() => screen.getByTestId('name-error'))
  })

  it('Should hide error message if name field is not touched', async () => {
    const nameTxt = screen.queryAllByTestId('name-error')

    await waitFor(() => expect(nameTxt?.length).toEqual(0))
  })

  // email field //
  it('Should form be invalid  if email field is empty', () => {
    const formValues = { email: '' }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })

  it('Should form be invalid  if email field is invalid', () => {
    const formValues = { email: 'invalid email' }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })

  it('Should show error message if email field touched and empty', async () => {
    const email = screen.getByTestId('email')
    const registerBtn = screen.getByTestId('register')

    fireEvent.changeText(email, '')
    fireEvent.press(registerBtn)

    await waitFor(() => screen.getByTestId('email-error'))
  })

  it('Should hide error message if email field is not touched', async () => {
    const emailTxt = screen.queryAllByTestId('email-error')

    await waitFor(() => expect(emailTxt?.length).toEqual(0))
  })

  // password field //
  it('Should form be invalid  if password field is empty', () => {
    const formValues = { password: '' }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })

  it('Should show error message if password field touched and empty', async () => {
    const password = screen.getByTestId('password')
    const registerBtn = screen.getByTestId('register')

    fireEvent.changeText(password, '')
    fireEvent.press(registerBtn)

    await waitFor(() => screen.getByTestId('password-error'))
  })

  it('Should hide error message if password field is not touched', async () => {
    const passwordTxt = screen.queryAllByTestId('password-error')

    await waitFor(() => expect(passwordTxt?.length).toEqual(0))
  })

  // confirm password //
  it('Should form be invalid if confirmPassword field does not match password field', () => {
    const formValues = {
      name: 'test',
      email: 'valid@example.com',
      password: 'Password1@',
      confirmPassword: 'Password1$',
      phone: '0500000000',
    }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })

  it('Should form be invalid if phone format is incorrect', () => {
    const formValues = {
      name: 'test',
      email: 'valid@example.com',
      password: 'Password1@',
      confirmPassword: 'Password1@',
      phone: '056363w3634',
    }
    expect(registerForm.isValidSync(formValues)).toBeFalsy()
  })
})
