import { View, Text, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>{index + 1} -</Text>
      <Text style={styles.instruction}> {data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: 'row',
    textAlign: 'flex-start'
  },
  index: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  instruction: {
    fontSize: 18,
    fontWeight: 400

  }
})