import React from "react";
import { Text } from "react-native";

export default function PrimeiroComponete(){
    return(
        <Text>Primeiro Componente</Text>
    )

}

function SegundoComponente(){
    return(
        <Text>Segundo Componente</Text>
    )
}



function TerceiroComponente(){
    return(
        <Text>Terceiro Componente</Text>
    )
}

export {SegundoComponente,TerceiroComponente}