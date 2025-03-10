import { createDrawerNavigator } from "@react-navigation/drawer";
import Feather from 'react-native-vector-icons/Feather';
import TabRouters from "./tab.router";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={TabRouters}
                options={{drawerIcon:()=><Feather name='home' size={20} color='green'/>,
                drawerLabel:"Inicio", drawerActiveBackgroundColor:"green"
            }}/>

            <Drawer.Screen name="Login" component={TabRouters} 
                initialParams={{inicialRouterName:'tabLogin'}}
                options={{drawerIcon:()=><Feather name='log-in'/>,
                drawerLabel:"Login", drawerActiveBackgroundColor:"green"
                }}/>

        </Drawer.Navigator>
    )
}