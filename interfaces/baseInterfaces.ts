type RootStackParamList = {
  HomeScreen: {} | undefined
  ChatScreen: {} | undefined
  LoginScreen: {} | undefined
}

type MapStackParamList = {
  NavigateCard: {} | undefined
  RideOptionsCard: {} | undefined
}

export type CombinedParamList = RootStackParamList & MapStackParamList
