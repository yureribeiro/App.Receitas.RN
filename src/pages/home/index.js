import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Logo } from '../../components/logo'
import { Ionicons } from '@expo/vector-icons' //icones

import strogonoff from '../../../assets/arroz.png'
import bife from '../../../assets/bife.png'
import pizza from '../../../assets/pizza.png'

export function Home() {
  const [inputValue, setInputValue] = useState('')

  function handleSearch() {
    console.log(`Voce Digitou: ${inputValue}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a Receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='pesquise pela comida...'
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name='search' size={28} color='#4CBE6C' />
        </TouchableOpacity>
      </View>

      <View style={styles.containerCards}>
        <ImageBackground source={strogonoff} style={styles.cards}>
          <View style={styles.detailsCard}>
            <Text style={styles.titlecard}>Strogonoff</Text>
            <Text style={styles.textcard}>5 ingredientes | 40 min</Text>
          </View>
        </ImageBackground>

        <ImageBackground source={bife} style={styles.cards}>
          <View style={styles.detailsCard}>
            <Text style={styles.titlecard}>Bife a Parmegiana</Text>
            <Text style={styles.textcard}>5 ingredientes | 40 min</Text>
          </View>
        </ImageBackground>

        <ImageBackground source={pizza} style={styles.cards}>
          <View style={styles.detailsCard}>
            <Text style={styles.titlecard}>Pizza Calabresa</Text>
            <Text style={styles.textcard}>5 ingredientes | 40 min</Text>
          </View>
        </ImageBackground>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //garante que cubra toda a tela!
    backgroundColor: '#F3F9FF',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0e0e0e'
  },
  form: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ECECEC',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    height: 45,
    width: '86%',
    maxWidth: '86%',
  },
  containerCards: {
    flexDirection: 'column',
    width: '100%',
  },
  cards: {
    height: 150,
    width: '100%',
    marginBottom: 14,
    borderRadius: 10
  },
  detailsCard: {
    color: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: 20,
    marginTop: 20
  },
  titlecard: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  textcard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
})
