import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../layouts/AuthProvider'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useTypedNavigation } from '../hooks/navigation'

const ModalScreen = () => {
  const { user } = useAuth()
  const [image, setImage] = useState("")
  const [job, setJob] = useState("")
  const [age, setAge] = useState("")
  const navigation = useTypedNavigation()

  const incompleteForm = !image || !job || !age

  const updateUserProfile = () => {
    if (!user) return
    setDoc(doc(db, "users", user?.uid), {
      id: user?.uid,
      displayName: user?.displayName,
      photoURL: image,
      job,
      age,
      timestamp: serverTimestamp()
    }).then(() => {
      navigation.navigate("HomeScreen")
    }).catch(error => {
      alert(error.message)
    })
  }

  return (
    <View className='flex-1 items-center pt-1'>
      <Image
        className='h-20 w-full'
        resizeMode='contain'
        source={{ uri: "https://links.papareact.com/2pf" }} />
      <Text className='text-xl text-gray-500 p-2 font-bold'>
        Welcome {user?.displayName}
      </Text>

      <Text className='text-center p-4 font-bold text-red-400'>
        Step 1: The Profile Picture
      </Text>
      <TextInput
        value={image}
        onChangeText={text => setImage(text)}
        className='text-center text-xl pb-2'
        placeholder='Enter a Profile Pic URL'
      />

      <Text className='text-center p-4 font-bold text-red-400'>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={text => setJob(text)}
        className='text-center text-xl pb-2'
        placeholder='Enter your occupation'
      />

      <Text className='text-center p-4 font-bold text-red-400'>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={text => setAge(text)}
        className='text-center text-xl pb-2'
        placeholder='Enter your age'
        maxLength={2}
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={updateUserProfile}
        disabled={incompleteForm}
        className={`w-64 p-3 rounded-xl absolute bottom-10 ${incompleteForm ? "bg-gray-400" : "bg-red-400"}`}
      >
        <Text className='text-center text-white text-xl'>Update Profile</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ModalScreen
