import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation//native'
import { Login, Register, OTP, ForgetPassword } from 'src/screens/Auth'
import {Home, Settings} from '../screens/Tabs'
import {getValueFor} from 'src/Store/SecureStore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-paper'

const AppNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()
  const isLoggedIn:any = getValueFor('token')
  const Tab = createBottomTabNavigator();


  const TabNavigator = () =>
    <Tab.Navigator   screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'abjad-arabic' : 'abjad-arabic';
        }

        // You can return any component that you like here!
        return <Button icon={iconName}> </Button>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
      </Tab.Navigator>
  

  return (
    <NavigationContainer>
       {isLoggedIn?._z ? <Screen name="Home" component={TabNavigator}></Screen>:
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Screen name="Home" component={TabNavigator}></Screen>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Register" component={Register}></Screen>
        <Screen name="OTP" component={OTP}></Screen>
        <Screen name="ForgetPassword" component={ForgetPassword}></Screen>
      
      </Navigator>}
    </NavigationContainer>
  )
}

export default AppNavigator
