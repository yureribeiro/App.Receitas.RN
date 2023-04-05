import { Text, StyleSheet } from "react-native"
import { View } from 'moti'

export function Logo() {
  return (
    <View style={styles.logoArea}
      from={{
        opacity: 0,
        translateX: -50
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      transition={{
        type: 'spring',
        duration: 950
      }}
    >
      <Text style={styles.logo}>Receita Fácil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: '#4CBE6C',
    alignSelf: 'flex-start',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 22,
    borderRadius: 8,
    borderBottomRightRadius: 35,
    marginBottom: 8
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
})