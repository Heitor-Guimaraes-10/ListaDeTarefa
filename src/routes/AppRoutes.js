import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TodoScreen from "../screens/TodoScreen";

export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
            <Stack.Screen name="Todo" component={TodoScreen} options={{headerShown:false}} />
         
        </Stack.Navigator>
    )
}