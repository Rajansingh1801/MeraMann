import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Link from './src/route/link';
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#b9eae1"
        translucent={true}
      />
      <Link />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
