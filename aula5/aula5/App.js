import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ListarAlunos from './src/components/ListarAlunos';


export default function App() {

  function clicado() {
    console.log("Clicado");
  }

  const [numero, setNumero] = useState(3)
  const [nome, setNome] = useState("")


  return (
    <View style={styles.container}>
      <Text>Aula Mobile</Text>
      <Text>Aula 5</Text>
      <Text>{numero}</Text>
      <Button title='BOTA' onPress={() => setNumero(numero + 1)} />
      <Button title='TIRA' onPress={() => setNumero(numero - 1)} />
      <ListarAlunos />
      <TextInput
        placeholder="Digite seu nome "
        value={nome}
        onChangeText={(value) => setNome(value)}
      />
      <Text>{nome}</Text>
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
});
