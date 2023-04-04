import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo } from '@expo/vector-icons'

export function Detail() {
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    //abrir details com o nome da receita
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da Receita',
      headerRight: () => (
        <Pressable onPress={() => console.log('clikou no coração')}>
          <Entypo
            name='heart'
            size={28}
            color='#FF4141'
          />
        </Pressable>
      )
    })
  }, [navigation, route.params?.data])

  return (
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
})