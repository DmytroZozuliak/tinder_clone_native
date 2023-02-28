import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTypedNavigation } from '../hooks/navigation'
import Swiper from "react-native-deck-swiper";
import useAuth from '../layouts/AuthProvider'
import HomeHeader from '../components/HomeHeader';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserCard } from '../interfaces/baseInterfaces';
import { maleCardsData } from '../constants/cards';
import HomeFooter from '../components/HomeFooter';
import { HomeCardEmpty, HomeCard } from '../components/HomeCard';

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
    <SafeAreaView className='flex-1'>
      <HomeHeader />

      {/* Cards */}
      <View className='flex-1'>
        {!isSwipedAll ? (
          <Swiper
            ref={swipeRef}
            key={maleCardsData.length}
            containerStyle={{ backgroundColor: "transparent" }}
            onSwipedAll={() => setIsSwipedAll(true)}
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
            onSwipedLeft={swipeLeft}
            onSwipedRight={swipeRight}
            renderCard={(card) => (card && (
              <HomeCard card={card} />
            ))
            }
          />
        ) : (
          <HomeCardEmpty />
        )}
      </View>
      {/* End of cards */}

      <HomeFooter swipeRef={swipeRef} />
    </SafeAreaView>
  )
}

export default HomeScreen
