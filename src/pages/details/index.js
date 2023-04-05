import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'

import { Ingredientes } from '../../components/ingredients'
import { Instructions } from '../../components/instructions'
import { Video } from '../../components/video';

import { isFavorite, saveFavorites, removeFavorites } from '../../utils/storage';

export function Detail() {
  const route = useRoute()
  const navigation = useNavigation()
  const [showVideo, setShowVideo] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useLayoutEffect(() => {
    //verificar Favorito
    async function getStatusFavorites() {
      const receipeFavorites = await isFavorite(route.params?.data)
      setFavorite(receipeFavorites)
    }
    getStatusFavorites()

    //abrir details com o nome da receita
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da Receita',
      headerRight: () => (
        <Pressable onPress={() => handleFavorites(route.params?.data)}>
          {favorite ? (
            <Entypo
              name='heart'
              size={28}
              color='#FF4141'
            />
          ) : <Entypo
            name='heart-outlined'
            size={28}
            color='#FF4141'
          />}
        </Pressable>
      )
    })
  }, [navigation, route.params?.data, favorite])

  async function handleFavorites(receipe) {
    if (favorite) {
      await removeFavorites(receipe.id)
      setFavorite(false)
    } else {
      await saveFavorites('@appreceitas', receipe)
      setFavorite(true)
    }
  }

  function handleVideo() {
    setShowVideo(true)
  }

  async function compartilhar() {
    try {
      await Share.share({
        url: 'http://sujeitoprogramador.com',
        message: `Receita ${route.params?.data.name}\nVi lá no app Receita Fácil`
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable onPress={handleVideo}>
        <View style={styles.playIcon}>
          <AntDesign name='playcircleo' size={55} color='#FAFAFA' />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}> {route.params?.data.name}</Text>
          <Text style={styles.ingredients}> Ingredientes ({route.params?.data.total_ingredients})</Text>
        </View>

        <Pressable onPress={compartilhar}>
          <Feather name='share-2' size={22} color='#121212' />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item) => (
        <Ingredientes
          key={item.id}
          data={item}
        />
      ))}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de Preparo</Text>
        <Feather
          name='arrow-down'
          size={22}
          color='#fff'
        />
      </View>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions
          key={item.id}
          data={item}
          index={index}
        />
      ))}

      <Modal visible={showVideo} animationType='slide'>
        <Video
          handleClose={() => setShowVideo(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    padding: 14
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: '100%'
  },
  playIcon: {
    position: 'absolute',
    zIndex: 9,
    left: 0, bottom: 0, top: 0, right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  ingredients: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  instructionsArea: {
    backgroundColor: '#4cbe6c',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    padding: 8,
    borderRadius: 4,
    borderBottomRightRadius: 20,
    marginBottom: 14
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingRight: 20
  }
}) 