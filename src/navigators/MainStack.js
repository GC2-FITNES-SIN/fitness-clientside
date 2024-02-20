import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import BottomNavigator from "./BottomNavigator";
import AuthContext from "../store/Auth";
import Login from "../screen/Login";
import Register from "../screen/Register";
import Routines from "../screen/Routines";
import Running from "../screen/Running";
import HistoryRunning from "../screen/HistoryRunning";
import DetailRoutine from "../screen/DetailRoutine";

const Stack = createNativeStackNavigator();
const MainStack = () => {
	const { login } = useContext(AuthContext);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="ButtomTab">
				{login ? (
					<>
						<Stack.Screen name="ButtomTab" component={BottomNavigator} options={{ headerShown: false }} />
						<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
						<Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
						<Stack.Screen name="Routines" component={Routines} options={{ headerShown: false }} />
						<Stack.Screen name="Running" component={Running} options={{ headerShown: false }} />
						<Stack.Screen name="RunningHistory" component={HistoryRunning} options={{ headerShown: false }} />
						<Stack.Screen name="DetailRoutine" component={DetailRoutine} options={{ headerShown: false }} />
					</>
				) : (
					<>
						<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
						<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
