import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import Auth from '../components/auth/Auth'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
import LoadingOverlay from '../components/auth/LoadingOverlay';

const Signup = () => {
  const [isAuthenticating, setIsAuthenticating]= useState(false)

  const authCtx = useContext(AuthContext)
  

  async function signupHandler({email,password}){
    
    setIsAuthenticating(true)
    try{
      await createUser(email,password)
      authCtx.authenticate()
    }catch (error){
      Alert.alert('Authentication failed', 'Could not create user, please check your input and try again')
      setIsAuthenticating(false)
    }   
  }

  if(isAuthenticating){
    return <LoadingOverlay message='Creating user....'/>
  }
  return (
    <View style={styles.container}>
      <Auth onAuthenticate={signupHandler}/>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})