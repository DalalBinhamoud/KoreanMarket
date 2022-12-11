import styled from 'styled-components/native'
import { theme } from '../theme'

export const Title = styled.Text`
  color: ${(props) =>
    props.primary ? theme.colors.primary : theme.colors.tertiary};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`
export const Subtitle = styled.Text`
  color: ${(props) =>
    props.primary ? theme.colors.primary : theme.colors.tertiary};
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`
