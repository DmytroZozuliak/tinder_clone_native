import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CombinedParamList } from '../interfaces/baseInterfaces'

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<CombinedParamList>>()
