import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation//native'
import { Login, Register, OTP, ForgetPassword } from 'src/screens/Auth'
import {Products, Settings} from '../screens/Tabs'
 import {getValueFor} from 'src/Store/SecureStore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-paper'
import * as Device from 'expo-device'

const AppNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()
  const isLoggedIn:any = Device.brand?  getValueFor('token') : {_z: localStorage.getItem('token')}
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
        return Device.brand? <Button icon={iconName}> </Button>: iconName;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={Products}></Tab.Screen>
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
