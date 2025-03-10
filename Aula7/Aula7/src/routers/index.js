import { NavigationContainer } from "@react-navigation/native";
import TabRouters from "./tab.router";
import DrawerRoutes from "./drawer.routes";

export default function Routers(){
    return(
        <NavigationContainer>
            <DrawerRoutes />
            {/* <TabRouters /> */}
        </NavigationContainer>
    )
}