import { View, Text, SafeAreaView, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTypedNavigation } from '../hooks/navigation'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import useAuth from '../layouts/AuthProvider'
import HomeHeader from '../components/HomeHeader';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserCard } from '../interfaces/baseInterfaces';
import { maleCardsData } from '../constants/cards';
import HomeFooter from '../components/HomeFooter';
import HomeCard from '../components/HomeCard';

const HomeScreen = () => {
  const navigation = useTypedNavigation()
  const { user, logOut } = useAuth()
  const swipeRef = useRef<Swiper<UserCard> | null>(null)
  const [profiles, setProfiles] = useState<UserCard[]>([])
  const [isSwipedAll, setIsSwipedAll] = useState(false)

  if (!user) {
    return (
      <SafeAreaView
        className='flex-1 items-center justify-center'>
        <Text>No user found</Text>
      </SafeAreaView>
    )
  }
  useLayoutEffect(() => {
    // navigates to modal when first entered and no profile in db
    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), snapshot => {
      if (!snapshot.exists()) {
        navigation.navigate('ModalScreen')
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    let unsubscribe

    const fetchCards = async () => [
      unsubscribe = onSnapshot(collection(db, 'users'), snapshot => {
        const filteredUsers = snapshot.docs
          .filter(doc => doc.id !== user.uid)
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        setProfiles(filteredUsers as UserCard[])
      })
    ]
    fetchCards()

    return unsubscribe
  }, [])

  const swipeLeft = async (cardInd: number) => {

  }
  const swipeRight = async (cardInd: number) => {

  }

  return (
    <SafeAreaView
      className='flex-1'>
      <HomeHeader />

      {/* Cards */}
      <View className='flex-1'>
        {!isSwipedAll ? (
          <Swiper
            ref={swipeRef}
            key={maleCardsData.length}
            containerStyle={{ backgroundColor: "transparent" }}
            onSwipedAll={() => {
              setIsSwipedAll(true)
            }}
            cards={profiles}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
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
            onSwipedLeft={(cardInd) => {
              swipeLeft(cardInd)
              // console.log("index", ind)
            }}
            onSwipedRight={(cardInd) => {
              swipeRight(cardInd)
            }}
            renderCard={(card, ind) => (card && (
              <HomeCard card={card} />
            ))
            }
          />
        ) : (
          <View className='relative bg-white h-3/4 rounded-xl justify-center items-center mx-6  mt-10'
            style={styles.cardShadow}>
            <Text className='font-bold pb-5 text-xl'>
              No more profiles available
            </Text>
            <Image
              className='h-20 w-full'
              resizeMode='contain'
              source={{ uri: "https://links.papareact.com/6gb" }}
            />
          </View>
        )}
      </View>

      {/* End of cards */}
      <HomeFooter swipeRef={swipeRef} />

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
