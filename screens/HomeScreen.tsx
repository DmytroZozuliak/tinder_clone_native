import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-red-300 flex-1'>
      <View className='flex-1 justify-center items-center '>
        <Text className='text-xl font-semibold'>Home text</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
