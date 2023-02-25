import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './layouts/AuthProvider';
import Navigation from './navigation';

export default function App() {

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
        <StatusBar />
      </AuthProvider>
    </SafeAreaProvider>
  );

}
