import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import useAuth from '../layouts/AuthProvider'
import { useTypedNavigation } from '../hooks/navigation';

const HomeHeader = () => {
  const { user, logOut } = useAuth()
  const navigation = useTypedNavigation()

  if (!user) return null

  return (
    <View className='flex-row items-center justify-between mx-5 '>
      <TouchableOpacity onPress={logOut}>
        <Image source={{ uri: user.photoURL || "" }}
          className="h-10 w-10 rounded-full" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModalScreen")}
      >
        <Image source={require('../assets/images/pngwing.com.png')}
          className="h-14 w-14 rounded-full" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Ionicons size={30} color="#FF5864" name='chatbubbles-sharp' />
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader
