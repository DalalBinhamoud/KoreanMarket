import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation//native'
import { Login, Register, OTP } from 'src/screens/Auth'
import Home from 'src/screens/Home'

const AppNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OTP"
      >
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Register" component={Register}></Screen>
        <Screen name="OTP" component={OTP}></Screen>
        <Screen name="Home" component={Home}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
