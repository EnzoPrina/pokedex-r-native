import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
    const navigation = useNavigation();
  return (
    <View style={styles.content}>
        <Text style={styles.title}>Oh! :( </Text>
      <Text style={styles.text}> No tienes favoritos. Por favor inicia sesion para verlos </Text>
      <Button title='Ir al login' onPress={() => navigation.navigate('Account')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 100,
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#666',
    },
    text: {
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    }
})