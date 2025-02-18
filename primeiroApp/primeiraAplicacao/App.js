import React  from "react";
import { Text, View, StyleSheet } from "react-native";
import PrimeiroComponete, {SegundoComponente,TerceiroComponente} from "./components/VariosComponetes";
import Estilo from "./components/Estilo";

export default function App(){
  return (
    <View style={estilo.container}>
      <Text style={estilo.txtNi}>Nicolas Brutti</Text>
      <Text style={Estilo.txtG}>Aula 01 - React Native</Text>
      <PrimeiroComponete />
      <SegundoComponente/>
    </View>
  )

}

const estilo = StyleSheet.create({
  txtNi:{
    color:'red',
    fontSize: 26,
    fontWeight:'bold',
  },
  container:{
    backgroundColor:'#1794DC',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }

})
