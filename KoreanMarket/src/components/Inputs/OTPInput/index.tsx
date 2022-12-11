import React, { useEffect, useRef, useState } from 'react'
import {
  OTPInputContainer,
  TextInputHidden,
  SplitOTPBoxesContainer,
  SplitBoxes,
  SplitBoxText,
  SplitBoxesFocused,
} from './Styles'
import { OTP_MAX_LENGTH } from 'src/constants/Utilities'

interface IProps {
  code: string
  setCode: React.Dispatch<React.SetStateAction<string>>
  setIsPinReady: React.Dispatch<React.SetStateAction<Boolean>>
}

const OTPInput = ({ code, setCode, setIsPinReady }: IProps) => {
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)
  const inputRef = useRef()
  const boxArray = new Array(OTP_MAX_LENGTH).fill(0)

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === OTP_MAX_LENGTH)
    // clean up function
    return () => {
      setIsPinReady(false)
    }
  }, [code])

  const boxDigit = (_, index) => {
    const emptyInput = ''
    const digit = code[index] || emptyInput

    const isCurrentValue = index === code.length
    const isLastValue = index === OTP_MAX_LENGTH - 1
    const isCodeComplete = code.length === OTP_MAX_LENGTH

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete)

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    )
  }

  const handleOnPress = () => {
    setIsInputBoxFocused(true)
    inputRef?.current.focus()
  }

  const handleOnBlur = () => {
    setIsInputBoxFocused(false)
  }

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </SplitOTPBoxesContainer>

      <TextInputHidden
        value={code}
        autoComplete="sms-otp" // TODO: implement autofill
        onChangeText={setCode}
        maxLength={OTP_MAX_LENGTH}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </OTPInputContainer>
  )
}

export default OTPInput
