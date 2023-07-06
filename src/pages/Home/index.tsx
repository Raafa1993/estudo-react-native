import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation<any>()

  function navegar() {
    navigation.navigate("details")
  }

  return (
    <View style={styles.container}>
      <Text>Hello Home</Text>
      
      <TouchableOpacity 
        onPress={navegar}
        style={styles.button}
      >
        <Text>Ir para detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#cece",
  }, 
  subtitle: {
    color: 'red'
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 220,
    backgroundColor: "#cecece"
  }
});
