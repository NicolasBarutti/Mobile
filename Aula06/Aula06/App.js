import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,Button } from 'react-native';
import { useState } from 'react';
import Renderizardados from './components/Renderizardados';

export default function App() {

  const [nomeJogador,setNomeJogador]=useState('')
  const [emailJogador, setEmailJogador] = useState('')
  const [mostrarDados,setMostrarDados] = useState(false)
  

      // parte exe2
  // function exibirDados(){
  //   if(mostrarDados === true){
  //     return <Text>{nomeJogador} - {emailJogador}</Text>
  //   } else {
  //     return null
  //   }
  // }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/FURIAAAAAAAAA.jpg')}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome: '
        autoCapitalize='words'
        maxLength={10}
        value={nomeJogador}
        onChangeText={(valor)=>setNomeJogador(valor)}
        // keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email:"
        autoCapitalize="none"
        keyboardType="email-address"
        maxLength={40}
        value={emailJogador}
        onChangeText={(valor)=> setEmailJogador (valor)}
      />
      <Button 
        title='Clique aqui para enviar'
        color={'blue'} 
        onPress={()=>setMostrarDados(true)}
      />

      {/* Exercicio 1 */}
      {/* {console.log('Jogador: ' + nomeJogador+"Email: "+ emailJogador)} */}

      {/* Exercicio 2 */}
      {/* {exibirDados()} */}
      {/* {mostrarDados&&<Text style={{fontSize:30, color:'#fff'}}> {nomeJogador - {emailJogador}}</Text>} */}

      {/* Exercicio 3 */}
      {mostrarDados&&<Renderizardados nameJogador={nomeJogador} eJogador={emailJogador}/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image:{
    resizeMode:'center',
    width:250,
    height:250
  },
  input:{
    backgroundColor:'#fff',
    width:300,
    borderRadius:7,
    paddingLeft:10,
    borderWidth:2,
    borderColor:'blue',
    fontSize:18,
    marginBottom:16
  }
});
