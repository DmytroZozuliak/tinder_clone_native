import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { onAuthStateChanged, GoogleAuthProvider, signInWithCredential, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';
import { authOptions } from '../constants/auth';

WebBrowser.maybeCompleteAuthSession();
const config: Partial<Google.GoogleAuthRequestConfig> = {
  ...authOptions,
  scopes: ["profile", "email"]
}
interface AuthContextInterface {
  user: User | null;
  promptAsync: ((options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>);
  error: null | string;
  isLoading: boolean;
  logOut: () => void;
}
const AuthContext = createContext<Partial<AuthContextInterface>>({})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<null | string>(null)
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(config);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user logged in
        setUser(user)
      } else {
        // not logged in
        setUser(null)
      }
      setIsLoadingInitial(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        if (response?.type === 'success') {
          // console.log("response", response)
          const { id_token } = response.params;
          const credential = GoogleAuthProvider.credential(id_token);
          await signInWithCredential(auth, credential);
        }
      } catch (error) {
        if (error instanceof Object) {
          const string = error.toString()
          setError(string)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetch()

  }, [response, promptAsync]);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).catch(err => setError(err))
  }

  const memoedValue = useMemo(() => ({
    user,
    promptAsync,
    error,
    isLoading,
    logOut
  }), [user, error, isLoading])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
