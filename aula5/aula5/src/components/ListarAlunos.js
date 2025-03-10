import { FlatList, Text, View } from "react-native";
import Alunos from "./Alunos";


export default function ListarAlunos() {
    return (
        <View>
            <FlatList
                data={Alunos}
                renderItem={({ item }) => {
                    return (
                        <Text>Nomes: {item.nomeAluno} Numero de Faltas: {item.nFaltas}</Text>
                    )

                }}
            />
        </View>
    )
} 