import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import BottomNavigator from "./BottomNavigator";
import AuthContext from "../store/Auth";
import Login from "../screen/Login";
import Register from "../screen/Register";

const Stack = createNativeStackNavigator();
const MainStack = () => {
	const { login } = useContext(AuthContext);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="ButtomTab">
				{!login ? (
					<Stack.Screen name="ButtomTab" component={BottomNavigator} options={{ headerShown: false }} />
				) : (
					<>
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="Register" component={Register} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
