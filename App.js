import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Lab01() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a1e5c',
      }}>
      <Text style={styles.titleStyle}>Aishwarya Shrestha</Text>
      <Text style={styles.idStyle}>Student ID: 301138662</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  idStyle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
});
