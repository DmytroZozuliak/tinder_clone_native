import { View, Text, SafeAreaView, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { useTypedNavigation } from '../hooks/navigation'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import useAuth from '../layouts/AuthProvider'
import { Card, maleCardsData } from '../constants/cards';

const HomeScreen = () => {
  const navigation = useTypedNavigation()
  const { user, logOut } = useAuth()
  const swipeRef = useRef<Swiper<Card> | null>(null)

  if (!user) {
    return (
      <SafeAreaView
        className='flex-1 items-center justify-center'>
        <Text>No user found</Text>
      </SafeAreaView>
    )
  }
  // console.log(user)

  return (
    <SafeAreaView
      className='flex-1'>
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

      {/* Cards */}
      <View className='flex-1'>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={maleCardsData}
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: 'right',
                  color: "red",
                }
              }
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                }
              }
            },
          }}
          onSwipedLeft={() => {

          }}
          onSwipedRight={() => {

          }}
          renderCard={card => (
            <View key={card.id} className='bg-white h-3/4 rounded-xl relative'>
              <Image
                className='h-full w-full rounded-xl'
                source={{ uri: card.photoURL }} />
              <View className='flex-row justify-between items-center bg-white  w-full h-20 absolute bottom-0 px-6 py-2 rounded-b-xl' style={styles.cardShadow}>
                <View>
                  <Text className='text-xl font-bold'>{card.firstName} {card.lastName}</Text>
                  <Text>{card.job}</Text>
                </View>
                <Text className='text-2xl font-bold'>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* End of cards */}

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

    </SafeAreaView>
  )
}

export default HomeScreen


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
