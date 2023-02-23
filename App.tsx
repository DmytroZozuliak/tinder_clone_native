import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      {/* <Navigation/> */}
      <SafeAreaView className='bg-red-200 flex-1'>
        <View className='flex-1 justify-center items-center '>
          <Text className='text-xl font-semibold'>Some text</Text>
        </View>
      </SafeAreaView>
      <StatusBar />
    </SafeAreaProvider>
  );

}
