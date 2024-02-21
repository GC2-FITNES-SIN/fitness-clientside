import { useEffect, useState } from "react";
import AuthContext from "./src/store/Auth";
import MainStack from "./src/navigators/MainStack";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { calculateBMI } from "./src/utils";
export default function App() {
	const [login, setLogin] = useState(false);
	const [profile, setProfile] = useState();

	const [bmi, setBmi] = useState(calculateBMI(profile?.weight, profile?.height));

	console.log(profile, "<<<< profile", bmi);
	useEffect(() => {
		SecureStore.getItemAsync("access_Token").then((res) => {
			if (res) {
				setLogin(true);
			}
		});
		SecureStore.getItemAsync("user").then((res) => {
			if (res) {
				setProfile(JSON.parse(res));
			}
		});
	}, [login]);
	return (
		<>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<AuthContext.Provider value={{ login, setLogin, profile, setProfile }}>
				<MainStack />
			</AuthContext.Provider>
		</>
	);
}
