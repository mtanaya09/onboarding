import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen =() => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.yourOneText}>YourOneOneONEONE</Text>
      <Text
      style={styles.yourOneSays}>Your modern bible app</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  yourOneText: {
    fontSize: 50,
  },

  yourOneSays: {
    fontSize: 15,
  }
});