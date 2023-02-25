import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CombinedParamList } from '../interfaces/baseInterfaces';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import useAuth from '../layouts/AuthProvider';

const Stack = createNativeStackNavigator<CombinedParamList>();

const Navigation = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
