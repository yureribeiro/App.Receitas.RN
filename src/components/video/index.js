import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { WebView } from 'react-native-webview';

export function Video({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.backButton}>
        <Feather name='arrow-left' size={24} color='#fff' />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView
        style={styles.contentView}
        source={{ uri: videoUrl }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4cbe6c',
    paddingStart: 18,
    height: 40,
    width: '100%',
  },
  backText: {
    fontSize: 20,
    color: '#fff',
    paddingStart: 10,
    fontWeight: 'bold'
  },
  contentView: {
    flex: 1,
    width: '100%'
  }
})