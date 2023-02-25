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

export interface UserCard {
  displayName: string
  age: string
  id: string
  job: string
  photoURL: string
  timestamp: Date
}
