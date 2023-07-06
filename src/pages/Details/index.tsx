import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Details() {
  return (
    <View style={styles.container}>
      <Text>Hello Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#cece",
  }, 
  subtitle: {
    color: 'red'
  }
});
