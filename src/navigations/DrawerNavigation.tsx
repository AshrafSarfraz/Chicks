import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import DrawerContent from "../screens/DrawerContent/index";
import TabNavigation from "./TabNavigation";
import { View } from "react-native";

const DrawerNavigation = ({ navigation }) => {

  
    return (
       <View style={{flex:1,backgroundColor:'transparent'}}>
         <Drawer.Navigator 
         drawerStyle={{
          backgroundColor: 'red',
        }}  
          drawerContent={(props) => <DrawerContent {...props}   />}>
            <Drawer.Screen  name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
        </Drawer.Navigator>
       </View>
    )
}

export default DrawerNavigation