import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import BottomNavigator from "./BottomNavigator";

const Stack = createNativeStackNavigator();
const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="ButtomTab">
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="ButtomTab" component={BottomNavigator} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
