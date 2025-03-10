import { Text } from "react-native";

export default (props)=>{
    return(
        <Text style ={{color:'#fff'}}>{props.nameJogador} - {props.eJogador}</Text>
    )

}