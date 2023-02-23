import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 bg-yellow-300 justify-center items-center ">
      <Text className="text-xl font-semibold">Hi there!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
