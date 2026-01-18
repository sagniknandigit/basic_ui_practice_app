import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {useRoute } from '@react-navigation/native'

const TomatoDetails = () => {
  const route=useRoute();
  const {data}=route.params;
  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image}></Image>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </View>
  )
}

export default TomatoDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image:{
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#900',
    marginBottom: 10,
  },
  subtitle:{
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  }
})