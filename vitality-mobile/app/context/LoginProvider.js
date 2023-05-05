import React, { createContext, useContext, useEffect, useState } from "react"
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const LoginContext = createContext()
import { BASE_URL } from '@env'

const LoginProvider = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [ jwt, setJwt] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const handleLogin = (email, password) => {
      setLoading(true)
      axios({
        method: 'POST',
        url: 'http://192.168.1.104:5000/auth/login',
        data: {
          "email": email,
          "password": password    
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.status == 200) {
          AsyncStorage.setItem('jwt', res.data.token)
          console.log(res.data.token);
          setJwt(res.data.token);
          setIsLoggedIn(true);
          setLoading(false)
        }
      }).catch((err) => {
        console.log(err.response.data);
        setLoading(false)
      })
    }

    const handleLogout = async () => {
        try {
          setLoading(true);
          await AsyncStorage.removeItem('jwt');
          setIsLoggedIn(false);
          setJwt(null);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    const isLog = async()=> {
        try{
            let userToken = await AsyncStorage.getItem('jwt')
            setJwt(userToken)

        }catch(e){
            console.log(`isLog in error ${e}`);
        }
    }

    useEffect(() => {
        isLog()
    }, [])

    return (
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, handleLogin, handleLogout, jwt}}>
          <View style={{ flex: 1, position: 'relative' }}>
            {children}
            {loading &&
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            }
          </View>
        </LoginContext.Provider>
      )
}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider