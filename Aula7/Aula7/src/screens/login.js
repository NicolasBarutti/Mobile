import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function login() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoPadrao}>Tela Login!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoPadrao:{
    fontSize:30,
    color:'blue'
  }
});
