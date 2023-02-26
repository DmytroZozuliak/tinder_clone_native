import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { UserCard } from '../interfaces/baseInterfaces'

interface HomeCardProps {
  card: UserCard
}

const HomeCard = ({ card }: HomeCardProps) => {
  return (
    <View key={card.id} className='bg-white h-3/4 rounded-xl relative'>
      <Image
        className='h-full w-full rounded-xl'
        source={{ uri: card.photoURL }} />
      <View className='flex-row justify-between items-center bg-white  w-full h-20 absolute bottom-0 px-6 py-2 rounded-b-xl' style={styles.cardShadow}>
        <View>
          <Text className='text-xl font-bold'>{card.displayName}</Text>
          <Text>{card.job}</Text>
        </View>
        <Text className='text-2xl font-bold'>{card.age}</Text>
      </View>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 2,
  }
})
