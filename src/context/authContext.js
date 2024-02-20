import React,{ createContext } from 'react'
import * as SecureStore from 'expo-secure-store'


export const AuthContext = createContext(null)

export default function AuthProvider(params) {
    const [isSignedIn, setIsSignedIn] = React.useState(false)

    React.useEffect(() => {
        SecureStore.getItemAsync('access_token')
        .then(access_Token => {
            if (access_Token) {
                setIsSignedIn(true)
            }
        })
    }, [])

    return <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
         {params.children}
    </AuthContext.Provider>
}