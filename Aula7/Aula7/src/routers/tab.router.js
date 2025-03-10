import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import login from "../screens/login"
import Feather from 'react-native-vector-icons/Feather';



const Tab = createBottomTabNavigator()

export default function TabRouters(props){
    console.log(props);
    return(
        <Tab.Navigator screenOptions={{headerShow:false}}
            inicialRouteName={props.route?.params?.inicialRouteName || 'tabHome'}
        >
            <Tab.Screen name="Home" component={Home}
                options={{tabBarIcon:()=><Feather name='home' size={20} color='green'/>,
                taBarLabel:"Inicio", tabBarActiveBackgroundColor:"green"
            }}/>

            <Tab.Screen name="Login" component={login} 
                options={{tabBarIcon:()=><Feather name='home'/>,
                tabBarLabel:"Login", tabBarActiveBackgroundColor:"green"
                }}/>

        </Tab.Navigator>
    )
}