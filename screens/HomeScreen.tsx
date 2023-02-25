import { View, Text, SafeAreaView, Button, Image } from 'react-native'
import React from 'react'
import { useTypedNavigation } from '../hooks/navigation'
import useAuth from '../layouts/AuthProvider'

const HomeScreen = () => {
  const navigation = useTypedNavigation()

  const { user, logOut } = useAuth()

  return (
    <SafeAreaView className='bg-red-300 flex-1'>
      <View className='flex-1 justify-center items-center '>
        <Text className='text-xl font-semibold'>Home text</Text>
        <Button color="blue" title='Go to Chat' onPress={() => navigation.navigate("ChatScreen")} />
        {user && <>
          <Text>{user.displayName}</Text>
          <Text>{user.email}</Text>
          {user.photoURL && <Image source={{ uri: user.photoURL }}
            style={{
              width: 100,
              height: 100,
            }} />}
        </>}
        <Button title='Log out' onPress={logOut} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
