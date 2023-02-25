import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useTypedNavigation } from '../hooks/navigation'

const ChatScreen = () => {
  const navigation = useTypedNavigation()
  return (
    <SafeAreaView className='bg-red-300 flex-1'>
      <View className='flex-1 justify-center items-center '>
        <Text className='text-xl font-semibold'>ChatScreen</Text>
        <Button title='Go back'
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  )
}

export default ChatScreen
