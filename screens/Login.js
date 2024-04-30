import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Auth from '../components/auth/Auth';
import { AuthContext } from '../store/auth-context';
import LoadingOverlay from '../components/auth/LoadingOverlay';
import {login} from '../util/auth'


const Login = () => {

  const [isAuthenticating, setIsAuthenticating]= useState(false)

  const authCtx = useContext(AuthContext)

  async function loginHandler({email,password}){
    setIsAuthenticating(true)
    try{
      const token = await login(email,password)
      authCtx.authenticate(token)

    }catch (error){
      Alert.alert('Authentication failed!', 'Could not log you in. Please check your email or password')
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating){
    return <LoadingOverlay message='Logging you in....'/>
  }
  return (
    <View style={styles.container}>
     <Auth isLogin={true} onAuthenticate={loginHandler  }/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})