import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import {
    blokKolamContext,
    kolamContext } from "./context/GlobalContext";

const Stack = createNativeStackNavigator();

const App = () => {
    const blok = require("./data/blokKolam.json");
    const kolam = require("./data/kolam.json");
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;