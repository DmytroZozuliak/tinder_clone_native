type RootStackParamList = {
  HomeScreen: {} | undefined
  ChatScreen: {} | undefined
  LoginScreen: {} | undefined
}

type ModalParamList = {
  ModalScreen: {} | undefined
  // RideOptionsCard: {} | undefined
}

export type CombinedParamList = RootStackParamList & ModalParamList
