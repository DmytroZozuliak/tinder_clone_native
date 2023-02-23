import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <SafeAreaView className='bg-red-300 flex-1'>
      <View className='flex-1 justify-center items-center '>
        <Text className='text-xl font-semibold'>ChatScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ChatScreen
