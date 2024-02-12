import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();
const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
