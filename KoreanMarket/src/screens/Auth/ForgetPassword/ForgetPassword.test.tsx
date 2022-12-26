import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { ForgetPassword } from '../index'
import { ForgetPasswordForm } from './Validation/ForgetPasswordForm'
import { Provider } from 'react-native-paper'

describe(("Forget password screen"),()=>{

  // it('should send reset link through email and inform user',()=>{
  //   expect().toBeFalsy()
  // })

  it('should form be invalid when email is empty', () => {
    const formValues = { email: '' }

    expect(ForgetPasswordForm.isValidSync(formValues)).toBeFalsy()
  })

  it('should form be invalid when email is invalid', () => {
    const formValues = { email: 'invalid email' }

    expect(ForgetPasswordForm.isValidSync(formValues)).toBeFalsy()
  })


  it('should form be valid', () => {
    const formValues = { email: 'valid@example.com' }

    expect(ForgetPasswordForm.isValidSync(formValues)).toBeTruthy()
  })

  it('should show error message if email is touched and is empty', async () => {
    const screen = render(<Provider><ForgetPassword navigation={{}} /></Provider>)

    const email = screen.getByTestId('email')
    fireEvent.changeText(email, '')

    const resetBtn = screen.getByTestId('reset-password')
    fireEvent.press(resetBtn)

    await waitFor(() => screen.getByTestId('email-error'))
  })

  it('should hide error message if email is not touched', async () => {
    const screen = render(<Provider><ForgetPassword navigation={{}} /></Provider>)

    const emailText = screen.queryAllByTestId('email-error')

    await waitFor(() => expect(emailText?.length).toEqual(0))
  })
    
})