import { StyleSheet, View } from "react-native";
import Quadrado from "./src/components/Quadrado";


export default Flex2 => {
    return (
        <View style={estilo.container}>
            <View style={{
                flex: 1,
                justifyContent: "space-around",
                alignItems: "flex-end"

            }}>
                <Quadrado cor="#ff801a" />
                <Quadrado cor="#dd22c1" />
                <Quadrado cor="#8312ed" />
                <Quadrado cor="#36c9a7" />
            </View>
        </View>
    )

}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignitems: "center",
        justfyContent: "center"
    }
})
