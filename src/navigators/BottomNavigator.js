import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HistoryRunning from "../screen/HistoryRunning";
import Running from "../screen/Running";
import Profile from "../screen/Profile";
import Register from "../screen/Register";
import Login from "../screen/Login";
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Profile") {
						iconName = focused ? "person" : "person-outline";
					} else if (route.name === "Search") {
						iconName = focused ? "search" : "search-outline";
					} else if (route.name === "AddPost") {
						iconName = focused ? "add" : "add-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Login" component={Login} />
			<Tab.Screen name="Register" component={Register} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Running" component={Running} />
			<Tab.Screen name="RunningHistory" component={HistoryRunning} />
		</Tab.Navigator>
	);
};

export default BottomNavigator;
