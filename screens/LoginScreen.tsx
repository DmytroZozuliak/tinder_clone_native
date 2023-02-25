import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../layouts/AuthProvider'

const LoginScreen = () => {
  const { promptAsync, user } = useAuth()

  return (
    <View className='flex-1'>
      <ImageBackground resizeMode='cover'
        className='flex-1'
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          className='absolute bottom-40 w-52 bg-white p-4 rounded-2xl'
          style={{ marginHorizontal: "25%" }}
          onPress={() => {
            promptAsync && promptAsync()
          }}
        >
          <Text className='text-center font-semibold'>Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen
