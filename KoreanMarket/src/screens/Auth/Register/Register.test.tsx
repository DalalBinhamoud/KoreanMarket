import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Register from '.'

describe('Register Screen', () => {
  it('Should navigate to OTP screen', () => {
    const navigation = { navigate: () => {} }
    jest.spyOn(navigation, 'navigate')

    const screen = render(<Register navigation={navigation} />)

    const registerBtn = screen.getByTestId('register')
    fireEvent.press(registerBtn)
    expect(navigation.navigate).toBeCalledWith('OTP')
  })
})
