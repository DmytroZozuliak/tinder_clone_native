import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'
import { UserCard } from '../interfaces/baseInterfaces'

interface HomeFooterProps {
  swipeRef: React.MutableRefObject<Swiper<UserCard> | null>
}

const HomeFooter = ({ swipeRef }: HomeFooterProps) => {
  return (
    <View className='flex-row justify-evenly items-center'>
      <TouchableOpacity
        className='items-center justify-center rounded-full w-16 h-16 bg-red-200'
        onPress={() => swipeRef && swipeRef.current?.swipeLeft()}
      >
        <Entypo name="cross" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        className='items-center justify-center rounded-full w-16 h-16 bg-green-200'
        onPress={() => swipeRef && swipeRef.current?.swipeRight()}
      >
        <AntDesign name="heart" size={24} color="green" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeFooter
