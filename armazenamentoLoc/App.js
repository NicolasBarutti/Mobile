import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View , TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';

export default function App() {

const[nomeProduto, setNomeProduto]= useState("")
const[valorProduto, setValorProduto]= useState()
const[listaProdutos,setListaProdutos] = useState([])

async function salvar(){
  let produtos = []

  if(await AsyncStorage.getItem("PRODUTOS") !=null){
    produtos = JSON.parse(await AsyncStorage.getItem("PRODUTOS"))
  }

  produtos.push({nome:nomeProduto,valor:valorProduto})

  await AsyncStorage.setItem("PRODUTOS" , JSON.stringify(produtos))
  alert("PRODUTO SALVO")

  buscarDados()

}

async function buscarDados(){
const p = await AsyncStorage.getItem("PRODUTOS")
setListaProdutos(JSON.parse(p))
}

  return (
    <View style={styles.container}>
        <Text>Cadastro</Text>
        <TextInput
        placeholder='Digite o nome do Produto'
        style={styles.input}
        value={nomeProduto}
        onChangeText={(value)=>setNomeProduto(value)}
        />
        <TextInputMask
        placeholder='Digite o valor do Produto'
        style={styles.input}
        type='money'
        value={valorProduto}
        onChangeText={(value)=>setValorProduto(value)}
        />
        <TouchableOpacity style={styles.btn} onPress={salvar}>
          <Text style={{color:"white"}}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={buscarDados}>
          <Text style={{color:"white"}}>Buscar Dados</Text>
        </TouchableOpacity>
        <FlatList
          data={listaProdutos}
          renderItem={({item, index})=>{
            return(
            <View style={styles.listFlat}>
              <View>
                <Text>Nome:{item.nome} - Preco:{item.valor}</Text>
              </View>
            </View>
          )}}
        />
        
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:20
  },
  input:{
    borderWidth:1,
    height:50,
    width:300,
    borderRadius:15,
    marginTop:10
  },
  btn:{
    backgroundColor:'blue',
    borderWidth:1,
    height:50,
    width:200,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  listFlat:{
    width:300,
    borderWidth:1,
    borderRadius:15,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:3
  }
  
});
