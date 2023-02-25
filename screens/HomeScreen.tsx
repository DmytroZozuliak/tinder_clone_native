import { View, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTypedNavigation } from '../hooks/navigation'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import useAuth from '../layouts/AuthProvider'

const HomeScreen = () => {
  const navigation = useTypedNavigation()
  const { user, logOut } = useAuth()

  if (!user) {
    return (
      <View>
        <Text>No user found</Text>
      </View>
    )
  }

  // console.log(user)

  return (
    <SafeAreaView
      className='bg-red-200 flex-1'>
      {/* Header */}
      <View className='flex-row items-center justify-between mx-5 '>
        <TouchableOpacity onPress={logOut}>
          <Image source={{ uri: user.photoURL || "" }}
            className="h-10 w-10 rounded-full" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/pngwing.com.png')}
            className="h-14 w-14 rounded-full" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Ionicons size={30} color="#FF5864" name='chatbubbles-sharp' />
        </TouchableOpacity>
      </View>
      {/* End of header */}

      {/* <View className='flex-1 justify-center items-center '>
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
      </View> */}
    </SafeAreaView>
  )
}

export default HomeScreen
