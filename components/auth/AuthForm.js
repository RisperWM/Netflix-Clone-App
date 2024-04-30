import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const AuthForm = ({ label, placeholder, value, onChangeText, error }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginBottom: 10,
    
  },
  label: {
    marginBottom: 5,
    color:"white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white", 
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
    fontWeight: "bold",
  },
  errorText:{
    color:"red",
  },  
});

export default AuthForm;
