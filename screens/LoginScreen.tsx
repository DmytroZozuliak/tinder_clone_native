import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import useAuth from '../layouts/AuthProvider'

const LoginScreen = () => {
  const { promptAsync, user } = useAuth()

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>LoginScreen</Text>
      <Button title="Log in"
        onPress={() => {
          promptAsync && promptAsync()
        }}
      />
    </View>
  )
}

export default LoginScreen
