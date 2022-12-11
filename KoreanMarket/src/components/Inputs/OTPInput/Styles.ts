import styled from 'styled-components/native'
import { theme } from 'src/styles/theme'

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const TextInputHidden = styled.TextInput`
  position: absolute;
  opacity: 0;
`

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
`
export const SplitBoxes = styled.View`
  border-color: ${() => theme.colors.darkGray};
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  min-width: 50px;
`

export const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${() => theme.colors.primary};
`

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: ${() => theme.colors.darkGray};
  background-color: ${() => theme.colors.gray};
`
