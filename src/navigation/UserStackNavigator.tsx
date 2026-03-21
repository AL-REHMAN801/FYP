import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/Registrationscreen'
import HomeScreen from '../screens/HomeScreen'
import GoogleMapsScreen from '../screens/google maps'
import WelcomeScreen from '../screens/WelcomeScreen'
const Stack = createNativeStackNavigator()
const  UserStackNavigator =()=>{
    return(
     <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name ='RegistrationScreen' component={RegistrationScreen} />
        <Stack.Screen name = 'LoginScreen' component={LoginScreen} />
        <Stack.Screen name  ='HomeScreen'component={HomeScreen}/>
        <Stack.Screen name ='GoogleMapsScreen' component={GoogleMapsScreen}/>
       
     </Stack.Navigator>




    )



}
export default UserStackNavigator;
