import { useEffect, useState } from "react";
import AuthContext from "./src/store/Auth";
import MainStack from "./src/navigators/MainStack";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { calculateBMI } from "./src/utils";
export default function App() {
	const [login, setLogin] = useState(false);
	const [profile, setProfile] = useState();
	const [bmi, setBmi] = useState();

	useEffect(() => {
		SecureStore.getItemAsync("access_token").then((res) => {
			if (res) {
				console.log(res, "<<<<< user login >>>>>", typeof res);
				setLogin(true);
			}
		});
		SecureStore.getItemAsync("profile").then((res) => {
			if (res) {
				console.log(res, "<<<<< user profile >>>>>", typeof res);
				setProfile(JSON.parse(res));
			}
		});
		SecureStore.getItemAsync("bmi").then((res) => {
			if (res) {
				console.log(res, "<<<<< user bmi >>>>>", typeof res);
				setBmi(JSON.parse(res));
			}
		});
	}, [login]);

	console.log(bmi, profile, "============ APP");

	return (
		<>
			<StatusBar backgroundColor="#1b1b1d" barStyle="light-content" />
			<AuthContext.Provider value={{ login, setLogin, profile, setProfile, bmi, setBmi }}>
				<MainStack />
			</AuthContext.Provider>
		</>
	);
}
