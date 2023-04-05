
import AsyncStorage from '@react-native-async-storage/async-storage'

//buscar os favoritos salvos
export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || []
}

//salvar um novo favorito
export async function saveFavorites(key, newItem) {
  let myFavorites = await getFavorites(key)

  let hasItem = myFavorites.some(item => item.id === newItem.id)
  if (hasItem) {
    console.log('este item já está salvo em favoritos!')
    return
  }

  myFavorites.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
  console.log('Salvo em favoritos')
}

//remover um favorito da lista
export async function removeFavorites(id) {
  let receipes = await getFavorites('@appreceitas') //key = @appreceitas

  let myFavorites = receipes.filter(item => {
    return (item.id !== id) //retorna todos itens diferentes do removido.
  })

  await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites))
  console.log('item Removido com sucesso!')
  return myFavorites
}

export async function isFavorite(receipe) {
  let myReceipes = await getFavorites('@appreceitas')

  const favorite = myReceipes.find(item => item.id === receipe.id)
  if (favorite) {
    return true
  }

  return false
}