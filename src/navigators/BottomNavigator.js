import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HistoryRunning from "../screen/HistoryRunning";
import Running from "../screen/Running";
import Profile from "../screen/Profile";
import Home from "../screen/Home";
import Routines from "../screen/Routines";

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
					} else if (route.name === "Routines") {
						iconName = focused ? "fitness" : "fitness-outline";
					} else if (route.name === "Running") {
						iconName = focused ? "footsteps" : "footsteps-outline";
					} else if (route.name === "RunningHistory") {
						iconName = focused ? "book" : "book-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#bd54eb",
				tabBarInactiveTintColor: "#fff",
				headerShown: false,
				tabBarInactiveBackgroundColor: "#1b1b1d",
				tabBarActiveBackgroundColor: "#1b1b1d",
				tabBarStyle: {
					borderColor: "unset",
					border: "unset",
					backgroundColor: "#1b1b1d",
				},
				// tabBarShowLabel: false,
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Routines" component={Routines} />
			<Tab.Screen name="Running" component={Running} />
			<Tab.Screen name="RunningHistory" component={HistoryRunning} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};

export default BottomNavigator;
