type RootStackParamList = {
  HomeScreen: {} | undefined
  ChatScreen: {} | undefined
  EatsScreen: {} | undefined
}

type MapStackParamList = {
  NavigateCard: {} | undefined
  RideOptionsCard: {} | undefined
}

export type CombinedParamList = RootStackParamList & MapStackParamList
