import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BibleScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", alignItems: "center" }}>
    <Text style={{ margin: 90, fontSize: 28 }}>This is a Bible Screen</Text>
    </View>
  );
};

export default BibleScreen;

const styles = StyleSheet.create({});