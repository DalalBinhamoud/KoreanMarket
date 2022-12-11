import { Appbar } from 'react-native-paper'
import { globalStyles } from 'src/styles/global.style'

interface IProps {
  title: string
  hasBackBtn: boolean
  navigation?: any
}
const Header = (props: IProps) => {
  const goBack = () => props.navigation.goBack()
  return (
    <Appbar.Header style={globalStyles.fullWidth}>
      {props.hasBackBtn && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  )
}

export default Header
