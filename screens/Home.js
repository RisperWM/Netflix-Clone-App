import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <View style={styles.container}>
      <Hero/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})